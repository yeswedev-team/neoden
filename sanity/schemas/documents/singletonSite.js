import { FaSitemap as icon } from 'react-icons/fa';

export default {
  name: 'singletonSite',
  title: 'Site',
  type: 'document',
  icon,
  // __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Titre du site',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description:
        "L'URL principale du site. Utilisée pour créer l'URL canonique",
    },
    {
      name: 'frontpage',
      type: 'reference',
      description: "Choisir la page qui servira de page d'accueil",
      to: { type: 'page' },
    },
    {
      title: 'Logo de la marque Neoden',
      description:
        "Le meilleur choix es d'utiliser un SVG où les couleurs sont définies avec la couleur courant (currentColor)",
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
          description: "Important pour le SEO et l'accessibilité.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      validation: (Rule) => [
        Rule.max(5).warning('Êtes-vous certain de vouloir plus de 5 items ?'),
        Rule.unique().error('Des items du menu sont dupliqués'),
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
  ],
};
