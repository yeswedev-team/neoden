import { FaAnchor as icon } from 'react-icons/fa';

export default {
  type: 'object',
  name: 'anchor',
  title: 'Ancre',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
    },
  ],
};
