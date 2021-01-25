export default {
  type: 'object',
  name: 'blockQuestions',
  title: 'Bloc des questions',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Question',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'file',
      name: 'pdf',
      title: 'Plaquette FAQ au format PDF',
      options: {
        accept: '.pdf',
      },
    },
    {
      type: 'array',
      name: 'questionsList',
      title: 'Liste des questions',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faq' }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'boolean',
      name: 'hasWaveUp',
      title: 'Ajouter une vague animée en haut du bloc ?',
    },
    {
      type: 'boolean',
      name: 'hasWaveDown',
      title: 'Ajouter une vague animée en bas du bloc ?',
    },
    {
      type: 'boolean',
      name: 'hasDoubleBotMargin',
      title: 'Doubler la marge interne basse ?',
    },
  ],
};
