import { IoCubeOutline as icon } from 'react-icons/io5';

export default {
  type: 'document',
  name: 'blocks',
  title: 'Blocs génériques',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titre du bloc',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'array',
      name: 'block',
      title: 'Bloc',
      of: [{ type: 'offers' }, { type: 'cta' }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
