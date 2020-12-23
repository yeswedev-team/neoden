export default {
  name: 'logo',
  type: 'object',
  title: 'Logo de la marque Neoden',
  description:
    "Le meilleur choix est d'utiliser un SVG où les couleurs sont définies avec la couleur courant (currentColor)",
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Logo',
    },
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
};
