export default {
  type: 'object',
  name: 'members',
  title: 'Bloc "Devenez membre de la communauté Neoden"',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'subtitle',
      title: 'Sous-titre',
    },
    {
      type: 'array',
      name: 'privilegeList',
      title: 'Liste des privilèges',
      of: [{ type: 'privilege' }],
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'buttonTitle',
      title: 'Intitulé du bouton',
    },
    {
      title: 'Lien externe du bloc',
      name: 'membersLink',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
};
