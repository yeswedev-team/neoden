export default {
  name: 'author',
  type: 'document',
  title: 'Auteur',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
