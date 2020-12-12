import { CgMenu as icon } from 'react-icons/cg';

export default {
  name: 'menuSingleton',
  title: 'Menu principal',
  type: 'document',
  icon,
  // __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'nav',
      title: 'Menu principal',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (NE PAS MODIFIER)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
    },
  ],
};
