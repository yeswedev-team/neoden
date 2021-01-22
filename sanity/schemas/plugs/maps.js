import { GrMapLocation as icon } from 'react-icons/gr';

export default {
  type: 'object',
  name: 'maps',
  title: 'Carte',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titre',
    },
    {
      type: 'number',
      name: 'defaultZoom',
      title: 'Zoom par défaut',
    },
    {
      type: 'array',
      name: 'locations',
      title: 'Locations',
      of: [
        {
          type: 'reference',
          to: [{ type: 'place' }],
        },
      ],
    },
  ],
};
