import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { BsCardText as icon } from 'react-icons/bs';

export default {
  type: 'object',
  name: 'intro',
  title: 'Introduction',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titre',
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
                      { type: 'menuItem' },
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
      type: 'boolean',
      name: 'hasWave',
      title: 'Ajouter une vague animée ?',
    },
  ],
  preview: {
    select: {
      title: 'title',
      text: 'text',
    },
    prepare({ title, text }) {
      return {
        title: `Intro : "${title || text}"`,
      };
    },
  },
};
