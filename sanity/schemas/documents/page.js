import { HiOutlineDocumentDuplicate as icon } from 'react-icons/hi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { supportedLanguages } from '../objects/localeString';

const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleMenu',
      title: 'Titre pour le menu (optionnel)',
      type: 'localeString',
    },
    {
      name: 'hero',
      type: 'array',
      title: 'Entête',
      description: 'Ajouter une entête',
      of: [{ type: 'hero' }],
      validation: (Rule) => Rule.max(1).error('Une seule entête possible'),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Sections',
      description: 'Ajouter, modifier et ordonner les sections',
      of: [
        { type: 'intro' },
        { type: 'ctaColumns' },
        { type: 'twoColumns' },
        { type: 'slider' },
        { type: 'promo' },
        { type: 'sectionOffers' },
        { type: 'ctaPlug' },
        { type: 'blockQuestions' },
        { type: 'upload' },
        { type: 'richtext' },
        { type: 'reference', to: [{ type: 'blocks' }] },
      ],
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
