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
      type: 'number',
      name: 'discount',
      title: 'Discount (%)',
      description: 'Entier positif, sera exprimé en pourcentage (50 => -50%)',
      validation: (Rule) => [
        Rule.min(1).error('La valeur doit être supérieure à 0'),
        Rule.max(100).error('La valeur ne peut être supérieure à 100'),
        Rule.positive().error('La valeur doit être un entier positif'),
        Rule.integer().error('La valeur doit être un nombre entier'),
      ],
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
