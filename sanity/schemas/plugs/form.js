export default {
  type: 'object',
  name: 'form',
  title: 'Formulaire Sendinblue',
  fields: [
    {
      title: "Source de l'iframe",
      name: 'iframeSrc',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Largeur de l'iframe (width)",
      name: 'iframeWidth',
      type: 'number',
    },
    {
      title: "Hauteur de l'iframe (height)",
      name: 'iframeHeight',
      type: 'number',
    },
  ],
};
