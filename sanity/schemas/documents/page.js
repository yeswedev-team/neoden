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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: `title.${baseLanguage.id}`,
        maxLength: 100,
      },
      validation: (Rule) => Rule.required().error('Champ obligatoire'),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Sections',
      description: 'Ajouter, modifier et ordonner les sections',
      of: [{ type: 'ctaColumns' }, { type: 'ctaPlug' }],
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
