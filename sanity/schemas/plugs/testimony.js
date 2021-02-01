export default {
  type: 'object',
  name: 'testimony',
  title: 'Bloc des témoignages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre (pour référence)',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'array',
      name: 'listTestimonies',
      title: 'Témoignages',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonies' }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
