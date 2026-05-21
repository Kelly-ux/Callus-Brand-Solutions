export const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
    { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true } },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'seoTitle', title: 'SEO title', type: 'string' },
    { name: 'seoDescription', title: 'SEO description', type: 'text', rows: 2 },
  ],
};