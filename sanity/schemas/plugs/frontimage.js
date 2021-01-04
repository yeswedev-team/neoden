import ConditionalFields from '../objects/ConditionalFields.js';

export default {
  type: 'object',
  name: 'frontimage',
  title: 'Image simple',
  inputComponent: ConditionalFields,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ],
  options: {
    condition: (document, context) => context().isBackground === false,
  },
};
