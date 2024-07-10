import { defineCollection, z } from 'astro:content';

const category = defineCollection({
	type: 'content',
	schema: z.object({
		parent: z.string().optional(),
		name: z.string(),
		logo: z.string().optional(),
		featured: z.boolean().optional(),
		theme: z.object({
			border: z.string().optional(),
			columns: z.number().optional(),
		}).optional(),
	}),
});

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		cover: image().refine((img) => img.width >= 1080, {
			message: "Cover image must be at least 1080 pixels wide!",
		}),
		created: z.union([z.coerce.date(), z.string().datetime()]),
		publish: z.union([z.coerce.date(), z.string().datetime()]),
		updated: z.union([z.coerce.date(), z.string().datetime()]).optional(),
		tags: z.array(z.string()).optional(),
		featured: z.object({
			edition: z.string(),
		}).optional(),
		theme: z.object({
			title: z.string().optional(),
			button: z.string().optional(),
		}).optional(),
	}),
});

export const collections = { blog, category };


