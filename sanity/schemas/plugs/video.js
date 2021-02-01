import { BsCameraVideoFill as icon } from 'react-icons/bs';

export default {
  type: 'object',
  name: 'video',
  title: 'Bloc vidéo',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titre',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      type: 'youtube',
      name: 'youtube',
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
  ],
};
