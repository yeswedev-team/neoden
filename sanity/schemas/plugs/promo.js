import { FiPercent as icon } from 'react-icons/fi';

export default {
  type: 'object',
  name: 'promo',
  title: 'Bloc promotion',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'period',
      title: 'Période',
    },
    {
      type: 'string',
      name: 'discount',
      title: 'Discount',
    },
    {
      type: 'string',
      name: 'text',
      title: 'Texte additionnel discount',
    },
    {
      title: 'Lien offre',
      name: 'offerlink',
      type: 'url',
    },
    {
      title: 'Lien réservation',
      name: 'bookinglink',
      type: 'url',
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
