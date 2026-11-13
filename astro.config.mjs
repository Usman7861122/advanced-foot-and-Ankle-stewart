import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';

// Old PatientPop addresses (/post/<slug>) -> new /blog/<slug>
const posts = JSON.parse(readFileSync(new URL('./src/data/blog-posts.json', import.meta.url), 'utf8'));
const redirects = Object.fromEntries(posts.map((p) => [`/post/${p.slug}`, `/blog/${p.slug}`]));
redirects['/blog-archive'] = '/blog';

export default defineConfig({
  site: 'https://www.advancedfootankle.com', // TODO: real domain
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  redirects,
});
