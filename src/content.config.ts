import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    venue: z.string().optional(),
    authors: z.array(z.string()),
    thumbnail: z.string().optional(),
    hero_video: z.string().optional(),
    hero_image: z.string().optional(),
    icon: z.string().default('cube'),
    links: z
      .object({
        paper: z.string().url().optional(),
        code: z.string().url().optional(),
        video: z.string().url().optional(),
        dataset: z.string().url().optional(),
      })
      .default({}),
    tags: z.array(z.string()).default([]),
    status: z.enum(['published', 'in-submission', 'workshop']).default('published'),
    featured: z.boolean().default(false),
    highlight: z.boolean().default(false),
    coming_soon: z.boolean().default(false),
    bibtex: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    read_time: z.number().optional(),
    draft: z.boolean().default(false),
    highlight: z.boolean().default(false),
    coming_soon: z.boolean().default(false),
    cover_image: z.string().optional(),
  }),
});

export const collections = { projects, blog };
