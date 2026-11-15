import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
    // The public slug is shared; collection IDs must include the locale folder.
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    locale: z.enum(['en', 'zh']),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    evidence: z.string(),
    order: z.number().int(),
    caseStudyReady: z.boolean().default(false),
    status: z.enum(['research', 'modules', 'integration']),
    statusAsOf: z.string(),
    role: z.string(),
    environment: z.string(),
    tags: z.array(z.string()),
    repository: z.url(),
    contributions: z.array(z.string()),
    contributionNote: z.string().optional(),
    ownershipSummary: z.string().optional(),
    collaboratorWork: z.array(z.string()).default([]),
    modules: z.array(z.object({
      name: z.string(),
      status: z.enum(['implemented', 'validated', 'in-progress', 'planned']),
      context: z.string(),
    })),
    sources: z.array(z.object({
      label: z.string(),
      url: z.url(),
      checkedAt: z.string(),
      ref: z.string(),
    })),
  }),
});

export const collections = { projects };
