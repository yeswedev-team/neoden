import { FaExternalLinkAlt, FaSitemap as icon } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

export default {
  name: 'singletonSite',
  title: 'Site',
  type: 'document',
  icon,
  // __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
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
  ],
};
