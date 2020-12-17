export default {
  type: 'object',
  name: 'illustration',
  title: 'Illustration',
  fields: [
    {
      title: 'Image de fond',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
};
