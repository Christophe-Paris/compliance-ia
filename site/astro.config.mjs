// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Compliance IA',
      description: 'Bibliothèque législative IA — veille réglementaire automatisée',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Français', lang: 'fr' },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Christophe-Paris/compliance-ia' }],
      sidebar: [
        {
          label: 'Bibliothèque législative',
          items: [
            { label: 'Accueil', slug: 'index' },
          ],
        },
        {
          label: 'Textes réglementaires',
          items: [
            { autogenerate: { directory: 'reglementation' } },
          ],
        },
        {
          label: 'Blog & Veille',
          items: [
            { autogenerate: { directory: 'blog' } },
          ],
        },
      ],
    }),
  ],
});

