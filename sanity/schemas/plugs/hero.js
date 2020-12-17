export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label (pour référence)',
    },
    {
      name: 'text',
      type: 'text',
      title: 'Texte',
    },
    {
      name: 'illustration',
      type: 'illustration',
    },
    {
      name: 'cta',
      type: 'cta',
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare({ title }) {
      return {
        title: `Hero: ${title}`,
      };
    },
  },
};
