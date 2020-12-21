import { MdLink as icon } from 'react-icons/md';

export default {
  name: 'route',
  type: 'document',
  title: 'Routes',
  description: 'Fait le lien entre le front et le back pour les pages',
  icon,
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'page',
      type: 'reference',
      description:
        'Selectionnez la page vers laquelle cette route devrait pointer',
      to: [
        {
          type: 'page',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Inclure la page dans le sitemap',
      description: 'Pour les moteurs de recherche. Sera ajouté à /sitemap.xml',
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Cacher cette route aux moteurs de recherche',
    },
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title.fr',
    },
    prepare({ slug, pageTitle }) {
      console.log(pageTitle);
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      };
    },
  },
};
