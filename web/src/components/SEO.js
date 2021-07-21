import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const desc = description || site.siteMetadata.description;
  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="fr" />
      <title>{title}</title>
      {/* Meta Tags */}
      <meta
        name="viewport"
        content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta charSet="utf-8" />
      <meta name="description" content={desc} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image || '/logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={desc} key="ogdesc" />
      <link rel="alternate" hrefLang="fr-fr" href={location.href} />
      {children}
    </Helmet>
  );
}
