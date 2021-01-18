import { BsFillPersonFill as icon } from 'react-icons/bs';

export default {
  name: 'author',
  type: 'document',
  title: 'Auteur',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
