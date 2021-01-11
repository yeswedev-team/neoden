import { MdLocalOffer as icon } from 'react-icons/md';

export default {
  type: 'object',
  name: 'sectionOffers',
  title: 'Section des offres',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titre pour référence',
    },
    {
      type: 'array',
      name: 'offer',
      title: 'Offres présentées',
      of: [
        {
          type: 'reference',
          to: [{ type: 'offre' }],
        },
      ],
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
