import { getCollection } from 'astro:content';
import type { Locale } from '../i18n';

export async function localizedProjects(locale: Locale) {
  const entries = await getCollection('projects');
  // Fail builds for unpaired entries instead of publishing an English fallback.
  for (const project of entries) {
    const pair = entries.filter(entry => entry.data.slug === project.data.slug);
    if (pair.length !== 2 || new Set(pair.map(entry => entry.data.locale)).size !== 2 || !project.id.startsWith(`${project.data.locale}/`)) {
      throw new Error(`Expected exactly one project per locale, in its locale folder: ${project.id}`);
    }
    const other = entries.find(entry => entry.data.slug === project.data.slug && entry.data.locale !== project.data.locale);
    if (!other || other.data.caseStudyReady !== project.data.caseStudyReady) {
      throw new Error(`Missing or mismatched project translation: ${project.id}`);
    }
    for (const field of ['status', 'statusAsOf', 'order', 'repository'] as const) {
      if (other.data[field] !== project.data[field]) throw new Error(`Inconsistent bilingual ${field}: ${project.data.slug}`);
    }
    if (JSON.stringify(other.data.modules.map(module => module.status)) !== JSON.stringify(project.data.modules.map(module => module.status))) {
      throw new Error(`Inconsistent bilingual module status: ${project.data.slug}`);
    }
  }
  return entries.filter(entry => entry.data.locale === locale).sort((a, b) => a.data.order - b.data.order);
}

export async function projectPaths(locale: Locale) {
  return (await localizedProjects(locale)).filter(project => project.data.caseStudyReady)
    .map(project => ({ params: { slug: project.data.slug }, props: { project } }));
}
