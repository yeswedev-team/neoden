import { MdLocalOffer as icon } from 'react-icons/md';

export default {
  type: 'document',
  name: 'offre',
  title: 'Offre',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: "Titre de l'offre",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image pour les onglets du bloc "Laissez-vous porter"',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageTab',
      title: 'Image pour les onglets du bloc "Offres" de la page Offres',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageAlt',
      title: 'Image pour le bloc "Découvrir aussi"',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'array',
      name: 'services',
      title: 'Services associés',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
