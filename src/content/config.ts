import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// 1. listings — curated property listings (static, manually updated placeholder content)
export const listings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/listings' }),
  schema: z.object({
    address: z.string(),
    neighborhood: z.string(), // e.g. "Tanglewood", "Golf Hammock"
    city: z.enum(['Sebring', 'Avon Park', 'Lake Placid']),
    price: z.number(),
    beds: z.number(),
    baths: z.number(),
    sqft: z.number(),
    status: z.enum(['active', 'sold']),
    daysOnMarket: z.number().optional(),
    saleToListRatio: z.number().optional(), // e.g. 1.01 = 101% of asking, sold only
    photo: z.string(), // path to placeholder image
    description: z.string(),
    isPlaceholder: z.boolean().default(true), // flags sample data for future removal
  }),
});

// 2. testimonials — client reviews & success stories
export const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    clientName: z.string(),
    neighborhood: z.string().optional(),
    year: z.number(),
    isPlaceholder: z.boolean().default(true),
  }),
});

// 3. neighborhoods — Highlands County communities
export const neighborhoods = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/neighborhoods' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    city: z.literal('Sebring'),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()),
    medianPrice: z.string().optional(), // placeholder-friendly string, e.g. "[PLACEHOLDER]"
    daysOnMarket: z.string().optional(),
    description: z.string(),
    amenities: z.array(z.string()),
    crossLinkSlugs: z.array(z.string()), // sibling neighborhoods per Site Architecture 3B
  }),
});

// 4. faq — People Also Ask & seller question mapping
export const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    page: z.string(), // which page/pillar this FAQ belongs to, e.g. "sell-my-home"
  }),
});

// 5. blog — localized educational and market intelligence articles
export const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    publishDate: z.coerce.date(),
    modifiedDate: z.coerce.date().optional(),
    primaryKeyword: z.string().optional(),
    metaDescription: z.string(),
    featuredImage: z.string().optional(),
    contentType: z.enum(['Seller Education', 'Market Intelligence', 'Community/Authority']),
    pillarLink: z.string(), // related pillar page path
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  listings,
  testimonials,
  neighborhoods,
  faq,
  blog,
};
