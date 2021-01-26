import { FiPenTool as icon, FiLink } from 'react-icons/fi';
import { FaExternalLinkAlt, FaAnchor } from 'react-icons/fa';

import { format } from 'date-fns';

export default {
  name: 'post',
  type: 'document',
  title: 'Billet de blog',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publié le',
      description:
        'Peut être utilisé pour publier le billet de blog à une date ultérieure',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Image principale',
    },
    {
      name: 'excerpt',
      title: 'Extrait',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
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
      name: 'summary',
      title: 'Sommaire',
      type: 'array',
      of: [{ type: 'anchor' }],
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
              {
                title: 'Ancre',
                name: 'anchor',
                type: 'object',
                blockEditor: {
                  icon: FaAnchor,
                },
                fields: [
                  {
                    name: 'anchorId',
                    type: 'slug',
                    title: 'Identifiant',
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
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     publishedAt: 'publishedAt',
  //     slug: 'slug',
  //     media: 'mainImage',
  //   },
  //   prepare({ title = 'Titre inconnu', publishedAt, slug = {}, media }) {
  //     const dateSegment = format(publishedAt, 'YYYY/MM');
  //     const path = `/${dateSegment}/${slug.current}/`;
  //     return {
  //       title,
  //       media,
  //       subtitle: publishedAt ? path : 'Missing publishing date',
  //     };
  //   },
  // },
};
