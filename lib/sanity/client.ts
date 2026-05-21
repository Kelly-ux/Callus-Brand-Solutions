import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

// Blog post query
export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt,
      "category": category->title,
      "coverImage": coverImage.asset->url
    }
  `);
}

// Case study query
export async function getCaseStudies() {
  return client.fetch(`
    *[_type == "caseStudy"] | order(_createdAt desc) {
      _id, title, slug, client, industry, results,
      "coverImage": coverImage.asset->url
    }
  `);
}