import ConditionalFields from '../objects/ConditionalFields.js';

export default {
  type: 'object',
  name: 'background',
  title: 'Image de fond',
  inputComponent: ConditionalFields,
  fields: [
    {
      title: 'Image de fond',
      name: 'bgimage',
      type: 'image',
    },
  ],
  options: {
    condition: (document, context) => context().isBackground === true,
  },
};
