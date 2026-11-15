import { en } from './en';
import { zh } from './zh';

export const locales = ['en', 'zh'] as const;
export type Locale = typeof locales[number];
export const languageTags = { en: 'en', zh: 'zh-CN' } as const;
export const dictionaries = { en, zh };
export const sectionIds = ['overview', 'problem', 'contributions', 'architecture', 'implementation', 'results', 'failure-analysis', 'limitations', 'media', 'repository'];

export function getLocale(pathname: string): Locale {
  return /^\/zh(?:\/|$)/.test(pathname) ? 'zh' : 'en';
}

/** Switch only the locale prefix; preserve page slugs and optional query/hash. */
export function localePath(path: string, locale: Locale): string {
  const match = path.match(/^([^?#]*)(.*)$/)!;
  let base = match[1].replace(/^\/zh(?=\/|$)/, '') || '/';
  if (!base.startsWith('/')) base = `/${base}`;
  // Astro's root 404 is a file; the localized equivalent has a normal route.
  if (base === '/404.html' || base === '/404/' || base === '/404') {
    return (locale === 'zh' ? '/zh/404/' : '/404.html') + match[2];
  }
  if (!base.endsWith('/')) base += '/';
  return (locale === 'zh' ? `/zh${base}` : base) + match[2];
}

export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'zh-CN', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}
