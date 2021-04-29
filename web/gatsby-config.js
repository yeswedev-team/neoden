const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProd = process.env.NODE_ENV === 'production';

const token = process.env.SANITY_TOKEN;

const clientConfig = require('./client-config');

module.exports = {
  siteMetadata: {
    title: `Neoden`,
    description: 'espace de flottaison',
    gmap_api_key: process.env.GOOGLE_MAPS_API_KEY,
    siteUrl: `https://www.neoden.fr`,
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
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-XV5XS024JM', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        // googleTagManager: {
        //   trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-google-tagmanager', // default
        //   dataLayerName: 'dataLayer', // default
        // },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-539NRKN',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-XV5XS024JM', // Google Analytics / GA
          // 'AW-CONVERSION_ID', // Google Ads / Adwords / AW
          // 'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '186328809700559',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.neoden.fr',
        sitemap: 'https://www.neoden.fr/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-verify-bing',
      options: {
        userIds: ['72EFEE97121B8660E2AF1B560C44E131'],
        xmlFileName: 'BingSiteAuth.xml', // optional
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
        overlayDrafts: !isProd && token,
        watchMode: !isProd,
        useCdn: isProd,
        token,
      },
    },
  ],
};
