export default {
  name: 'authorReference',
  type: 'object',
  title: "Référence à l'auteur",
  fields: [
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'author.name',
    },
  },
};
