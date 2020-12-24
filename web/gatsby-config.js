import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Neoden`,
    description: 'espace de flottaison',
  },
  plugins: [
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
          `raleway\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: 'gatsby-plugin-transition-link',
    //   options: {
    //     injectPageProps: false,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-sanity-image',
    //   options: {
    //     // Sanity project info (required)
    //     projectId: process.env.SANITY_PROJECT_ID,
    //     dataset: 'production',
    //   },
    // },
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
        projectId: '1fcdf5t0',
        dataset: 'production',
        watchMode: true,
        useCdn: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
