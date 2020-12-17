export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
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
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
      validation: (Rule) => [
        Rule.required().min(1).error('Champ obligatoire'),
        Rule.max(1).error('Un seul lien possible'),
      ],
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
