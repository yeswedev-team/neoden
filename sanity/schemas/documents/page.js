import { HiOutlineDocumentDuplicate as icon } from 'react-icons/hi';
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
      name: 'titleSeo',
      title: 'SEO - Titre',
      type: 'string',
      description:
        "Titre pour le SEO - N'apparaît pas sur la page - S'il n'est pas renseigné, c'est le titre de la page qui apparaît.",
    },
    {
      name: 'descriptionSeo',
      title: 'SEO - Description',
      type: 'text',
      description:
        "Description pour le SEO - N'apparaît pas sur la page -  S'il n'est pas renseigné, c'est la description du site qui apparaît.",
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
        { type: 'video' },
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
