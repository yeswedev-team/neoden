import { FiLink } from 'react-icons/fi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ImBubble as icon } from 'react-icons/im';

export default {
  type: 'document',
  name: 'testimonies',
  title: 'Ils parlent de nous',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publié le',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'text',
      title: 'Texte',
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
        {
          type: 'image',
        },
        { type: 'youtube' },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'authors',
      title: 'Auteurs',
      type: 'array',
      of: [
        {
          type: 'authorReference',
        },
      ],
    },
    {
      name: 'pageLink',
      title: 'Lien vers la page',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'route' }, { type: 'post' }] }],
      validation: (Rule) => [Rule.max(1).error('Un seul lien possible')],
    },
    {
      name: 'externalLink',
      title: 'OU lien externe',
      type: 'url',
    },
  ],
};
