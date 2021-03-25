import { AiOutlineForm as icon } from 'react-icons/ai';

export default {
  type: 'object',
  name: 'form',
  title: 'Formulaire Sendinblue',
  icon,
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
    {
      type: 'boolean',
      name: 'hasDoubleBotMargin',
      title: 'Doubler la marge interne basse ?',
    },
  ],
};
