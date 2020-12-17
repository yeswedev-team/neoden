export default {
  type: 'object',
  name: 'offers',
  title: "Bloc d'onglets des offres",
  fields: [
    {
      type: 'string',
      name: 'overtitle',
      title: 'Surtitre',
    },
    {
      type: 'string',
      name: 'title',
      title: 'Titre',
    },
    {
      type: 'array',
      name: 'offerLink',
      title: 'Offres',
      of: [
        {
          type: 'reference',
          to: [{ type: 'offre' }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
