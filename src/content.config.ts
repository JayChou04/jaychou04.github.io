import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

export const collections = { blog };
