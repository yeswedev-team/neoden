export const supportedLanguages = [
  { id: 'fr', title: 'Français', isDefault: true },
  { id: 'en', title: 'English' },
];

export default {
  name: 'localeString',
  title: 'Locale String',
  type: 'object',
  fieldsets: [
    {
      title: 'Traductions',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
