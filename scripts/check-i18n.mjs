import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

// Dependency-free verification of actual static output. Run after npm run build.
const walk = async dir => (await Promise.all((await readdir(dir, { withFileTypes: true })).map(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]))).flat();
const files = await walk('dist');
const pages = files.filter(file => file.endsWith('.html'));
const routes = ['/', '/projects/', '/projects/etpnav-mid360/', '/projects/navida-habitat/', '/404.html'];
const routeFile = route => path.join('dist', route.endsWith('.html') ? route : `${route}index.html`);
const translated = route => route === '/404.html' ? '/zh/404/' : `/zh${route}`;
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map(match => attrs(match[0]));
const errors = [];
const check = (test, message) => { if (!test) errors.push(message); };
let origin;
for (const english of routes) {
  const pair = { en: english, 'zh-CN': translated(english) };
  for (const [language, route] of Object.entries(pair)) {
    const html = await readFile(routeFile(route), 'utf8');
    check(tags(html, 'html')[0]?.lang === language, `${route}: incorrect html lang`);
    check(html.includes('noindex, nofollow'), `${route}: development indexing guard missing`);
    check(!/\bundefined\b|\[object Object\]/.test(html), `${route}: unresolved content`);
    const links = tags(html, 'link');
    const canonical = links.find(link => link.rel === 'canonical')?.href;
    if (!origin && canonical) origin = new URL(canonical).origin;
    check(canonical === new URL(route, origin).href, `${route}: canonical mismatch`);
    if (process.env.SITE_URL) check(origin === new URL(process.env.SITE_URL).origin, `${route}: configured canonical origin mismatch`);
    for (const [locale, target] of Object.entries({ ...pair, 'x-default': english })) {
      check(links.some(link => link.rel === 'alternate' && link.hreflang === locale && link.href === new URL(target, origin).href), `${route}: missing/wrong ${locale} alternate`);
    }
    const metas = tags(html, 'meta');
    const meta = name => metas.find(value => value.property === name || value.name === name)?.content;
    check(meta('og:url') === canonical, `${route}: Open Graph URL mismatch`);
    check(meta('og:locale') === (language === 'en' ? 'en_US' : 'zh_CN'), `${route}: Open Graph locale mismatch`);
    check(Boolean(meta('description')) && meta('description') === meta('og:description'), `${route}: localized description missing/mismatched`);
    const anchors = tags(html, 'a');
    for (const [locale, target] of Object.entries(pair)) {
      check(anchors.some(link => link.hreflang === locale && link.href === target), `${route}: language switch does not preserve current page`);
    }
    check(anchors.filter(link => link.hreflang && link['aria-current'] === 'page').length === 1, `${route}: active language unclear`);
    check((html.match(/<h1[\s>]/g) || []).length === 1, `${route}: heading structure`);
    if (language === 'zh-CN') check(/[\u4e00-\u9fff]/.test(meta('description')), `${route}: description not translated`);
  }
}

// Check every generated page, including the nested Cloudflare 404 copy.
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  for (const link of [...tags(html, 'a'), ...tags(html, 'script'), ...tags(html, 'link')]) {
    const url = link.href ?? link.src;
    if (!url || !url.startsWith('/') || url.startsWith('//')) continue;
    const [pathname, fragment] = url.split('#');
    let target = pathname ? routeFile(pathname.split('?')[0]) : file;
    // Assets have their own extensions and are not page routes.
    if (pathname && path.extname(pathname) && !pathname.endsWith('.html')) target = path.join('dist', pathname);
    try {
      await stat(target);
      if (fragment && target.endsWith('.html')) {
        const data = await readFile(target, 'utf8');
        check(data.includes(`id="${fragment}"`), `${file}: broken fragment ${url}`);
      }
    } catch { errors.push(`${file}: broken local link ${url}`); }
    if (file.startsWith('dist/zh/') && link.href && !link.hreflang && !link.rel && pathname && !pathname.startsWith('/zh/')) errors.push(`${file}: content link leaves Chinese locale: ${url}`);
  }
}

const en = await readFile(routeFile('/projects/etpnav-mid360/'), 'utf8');
const zh = await readFile(routeFile('/zh/projects/etpnav-mid360/'), 'utf8');
const navEn = await readFile(routeFile('/projects/navida-habitat/'), 'utf8');
const navZh = await readFile(routeFile('/zh/projects/navida-habitat/'), 'utf8');
for (const id of ['NAV-01','NAV-02','NAV-03']) {
  check(navEn.includes(`data-asset-id="${id}"`) && navZh.includes(`data-asset-id="${id}"`), `Missing bilingual NaVIDA media: ${id}`);
}
for (const value of ['21', '11', '8.620', 'Fake Policy']) {
  check(navEn.includes(value) && navZh.includes(value), `Missing bilingual NaVIDA evidence value: ${value}`);
}
check(navEn.includes('engineering-demo.mp4') && navZh.includes('engineering-demo.mp4'), 'Missing bilingual NaVIDA demo video');
check(!navEn.includes('ETPNav-MID360-showcase') && !navZh.includes('ETPNav-MID360-showcase'), 'Stale ETPNav showcase URL in NaVIDA');
const numericCells = html => [...html.matchAll(/<td>([\d.]+)<\/td>/g)].map(match => match[1]);
check(numericCells(en).length === 36, 'Expected all 36 experimental metric values');
check(JSON.stringify(numericCells(en)) === JSON.stringify(numericCells(zh)), 'Bilingual experimental values differ');
for (const id of ['overview','problem','contributions','architecture','implementation','results','failure-analysis','limitations','media','repository']) {
  check(en.includes(`id="${id}"`) && zh.includes(`id="${id}"`), `Missing parallel section: ${id}`);
}
for (const value of ['595', '411', '25', '159', '20', 'val_unseen']) check(en.includes(value) && zh.includes(value), `Missing audit value/context: ${value}`);
for (const id of ['ETP-01', 'ETP-02', 'ETP-03', 'ETP-04']) check(en.includes(`data-asset-id="${id}"`) && zh.includes(`data-asset-id="${id}"`), `Missing parallel asset: ${id}`);
for (const label of ['AUTHENTIC MEDIA PENDING','Reference baseline','Research in progress','Public documentation checked','No page at this address.']) check(!zh.includes(label), `Untranslated UI: ${label}`);
check((await readFile('dist/zh/404.html', 'utf8')) === (await readFile('dist/zh/404/index.html', 'utf8')), 'Cloudflare Chinese 404 copy mismatch');
check((await readFile('dist/robots.txt', 'utf8')).includes('Disallow: /'), 'robots development guard missing');
check(!files.some(file => file.endsWith('temp_report.md')), 'Ignored report leaked to output');
console.log(JSON.stringify({ pages: pages.length, canonicalOrigin: origin, experimentalValuesCompared: numericCells(en).length, errors }, null, 2));
assert.equal(errors.length, 0, 'Bilingual static validation failed');
