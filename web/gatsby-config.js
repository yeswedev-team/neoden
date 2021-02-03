import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const clientConfig = require('./client-config');

export default {
  siteMetadata: {
    title: `Neoden`,
    description: 'espace de flottaison',
    gmap_api_key: process.env.GOOGLE_MAPS_API_KEY,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Neoden - espace de flottaison`,
        short_name: `Neoden`,
        start_url: `/`,
        background_color: `#2e2e2e`,
        theme_color: `#c3a050`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: null,
        host: null,
        policy: [{ userAgent: '*', disallow: ['/'] }],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `crimson text\: 400, 400i, 600, 700`,
          `raleway\:300,400,400i, 500, 600, 700, 900`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -200,
        duration: 1000,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-portal`,
    `gatsby-plugin-optimize-svgs`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        projectId: '5mks88u2',
        dataset: 'production',
        watchMode: true,
        useCdn: false,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
