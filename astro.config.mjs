import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import { fileURLToPath } from 'url'
import compress from 'astro-compress'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// Vite configuration with path aliases
const viteConfig = {
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@content': fileURLToPath(new URL('./src/content', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
}

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  output: 'static',
  adapter: cloudflare(),
  site: 'https://alysonthomas.com',
  compressHTML: true,
  integrations: [
    compress(),
    icon(),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/privacy-policy') &&
        !page.includes('/terms-of-service') &&
        !page.includes('/sitemap'),
    }),
  ],
  vite: viteConfig,
})
