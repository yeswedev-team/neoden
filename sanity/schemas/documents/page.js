import { HiOutlineDocumentDuplicate as icon } from 'react-icons/hi';

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleMenu',
      title: 'Titre pour le menu (optionnel)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    // {
    //   title: 'Sélectionnez le type de page',
    //   name: 'pageType',
    //   type: 'pageType',
    // },
  ],
};
