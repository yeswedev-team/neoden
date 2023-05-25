import { MdCallToAction as icon } from 'react-icons/md';

export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  icon,
  fieldsets: [
    {
      title: 'Lien',
      name: 'link',
      description: 'Only the first value of these will be used',
    },
  ],
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaPageLink',
      title: 'Lien vers la page',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'route' }, { type: 'post' }] }],
      validation: (Rule) => [
        Rule.max(1).error('Un seul lien possible'),
      ],
      description: 'Si le titre du block CTA est : Nous contacter ; le cta ouvrira Kalendès',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `CTA : "${title}"`,
      };
    },
  },
};
