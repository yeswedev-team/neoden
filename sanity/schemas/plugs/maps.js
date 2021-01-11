import { GrMapLocation as icon } from 'react-icons/gr';

export default {
  type: 'object',
  name: 'maps',
  title: 'Carte',
  icon,
  fields: [
    {
      type: 'array',
      name: 'locations',
      title: 'Locations',
      of: [{ type: 'location' }],
    },
  ],
};
