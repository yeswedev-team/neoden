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
  ],
};
