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
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.neoden.fr`,
        noTrailingSlash: true,
        noQueryString: true,
        noHash: true,
      },
    },
    `gatsby-plugin-netlify`,
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       'UA-189099477-1', // Google Analytics / GA
    //       // 'AW-CONVERSION_ID', // Google Ads / Adwords / AW
    //       // 'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       // optimize_id: 'OPT_CONTAINER_ID',
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       // exclude: ['/preview/**', '/do-not-track/me/too/'],
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: '186328809700559',
    //   },
    // },
    {
      resolve: `gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: `3191954`,
        // Include LinkedIn Insight in development.
        // Defaults to false meaning LinkedIn Insight will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        // googleAnalytics: {
        //   trackingId: 'UA-189099477-1', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-google-analytics', // default
        //   anonymize: true, // default
        //   allowAdFeatures: true, // default
        // },
        googleTagManager: {
          trackingId: 'UA-189099477-1', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          defaultDataLayer: { platform: 'gatsby' },
        },
        facebookPixel: {
          pixelId: '186328809700559', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
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
        policy: [{ userAgent: '*', allow: '/', disallow: '/?offer=' }],
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 75,
          breakpoints: [512, 768, 1024, 1280, 1520],
          layout: `fullWidth`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
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
        apiVersion: '2021-06-07', // use a UTC date string
        watchMode: !isProd,
        useCdn: isProd,
        token,
      },
    },
  ],
};
