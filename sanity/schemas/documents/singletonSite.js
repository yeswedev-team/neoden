import { FaExternalLinkAlt, FaSitemap as icon } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

export default {
  name: 'singletonSite',
  title: 'Site',
  type: 'document',
  icon,
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
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
      name: 'logo',
      title: 'Logo de la marque Neoden',
      type: 'logo',
    },
    {
      name: 'defaultImage',
      title: 'Image par défaut',
      type: 'image',
    },
    {
      title: 'Navigation principale gauche',
      name: 'mainNavigation',
      description: "Sélectionnez les pages pour le menu d'entête",
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
    {
      title: 'Navigation principale droite',
      name: 'mainRightNavigation',
      description: "Sélectionnez les pages pour le menu d'entête",
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
    {
      title: 'Navigation des offres alternatives',
      name: 'offersAltNav',
      description:
        'Sélectionnez les pages pour le menu des offres alternatives',
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
    {
      title: 'Url de l\'item du menu contact',
      name: 'urlfield',
      type: 'url',
    },
    {
      title: 'Navigation de pied-de-page',
      name: 'footerNavigation',
      description: 'Sélectionnez les pages pour le menu de pied-de-page',
      validation: (Rule) => [
        Rule.max(8).warning('Êtes-vous certain de vouloir plus de 8 items ?'),
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
    {
      title: 'Liens à côté du copyright',
      name: 'copyNavigation',
      description: 'Sélectionnez les pages',
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
    {
      title: 'Objet du bloc alerte',
      name: 'alertDestiny',
      type: 'array',
      of: [{ type: 'promo' }, { type: 'alert' }, { type: 'form' }],
      validation: (Rule) => Rule.max(1).error('Une seule destination possible'),
    },
    {
      title: "Position de l'alerte",
      name: 'alertPosition',
      type: 'string',
      options: {
        list: [
          { title: 'Droite (par défaut)', value: 'right' },
          { title: 'Centre', value: 'center' },
          { title: 'Gauche', value: 'left' },
        ],
        layout: 'radio',
      },
    },
    {
      title: "Afficher l'alerte ?",
      name: 'alertDisplay',
      type: 'boolean',
    },
    {
      title: 'Adresse',
      name: 'address',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          // Styles let you set what your user can mark up blocks with. These
          // corrensponds with HTML tags, but you can set any title or value
          // you want and decide how you want to deal with it where you want to
          // use your content.
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              {
                title: 'Exposant',
                value: 'sup',
                blockEditor: {
                  icon: () => 'E',
                },
              },
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                title: 'External Link',
                name: 'link',
                type: 'object',
                blockEditor: {
                  icon: FaExternalLinkAlt,
                },
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['https', 'http', 'mailto', 'tel'],
                      }),
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    description:
                      'Read https://css-tricks.com/use-target_blank/',
                    type: 'boolean',
                  },
                ],
              },
              {
                title: 'Internal link',
                name: 'internalLink',
                type: 'object',
                blockEditor: {
                  icon: FiLink,
                },
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [
                      { type: 'route' },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          // Styles let you set what your user can mark up blocks with. These
          // corrensponds with HTML tags, but you can set any title or value
          // you want and decide how you want to deal with it where you want to
          // use your content.
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              {
                title: 'Exposant',
                value: 'sup',
                blockEditor: {
                  icon: () => 'E',
                },
              },
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                title: 'External Link',
                name: 'link',
                type: 'object',
                blockEditor: {
                  icon: FaExternalLinkAlt,
                },
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['https', 'http', 'mailto', 'tel'],
                      }),
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    description:
                      'Read https://css-tricks.com/use-target_blank/',
                    type: 'boolean',
                  },
                ],
              },
              {
                title: 'Internal link',
                name: 'internalLink',
                type: 'object',
                blockEditor: {
                  icon: FiLink,
                },
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [
                      { type: 'route' },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      title: 'Numéro de téléphone',
      name: 'tel',
      type: 'string',
      description: 'Format : +33999999999',
      validation: (Rule) => [
        Rule.required()
          .min(12)
          .error('Le champ doit contenir 12 caractères minimum ("+" compris)'),
        Rule.max(12).error(
          'Le champ doit contenir 12 caractères maximum ("+" compris)'
        ),
        Rule.custom((name) => {
          if (typeof name === 'undefined') {
            return false; // Disallow undefined values
          }

          return name.startsWith('+33')
            ? true
            : 'Le numéro doit débuter par "+33"';
        }),
        Rule.custom((name) =>
          /\s/.test(name) ? "Le numéro ne doit pas contenir d'espace" : true
        ),
      ],
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'url',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
    },
    {
      title: 'Linkedin',
      name: 'linkedin',
      type: 'url',
    },
    {
      title: 'Youtube',
      name: 'youtube',
      type: 'url',
    },
  ],
};
