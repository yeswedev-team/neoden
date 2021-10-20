import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'normalize.css';
import styled from 'styled-components';
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from 'react-cookie-consent';
import { useLocation } from '@gatsbyjs/reach-router'; // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';
import Footer from './Footer';

const LayoutStyles = styled.div``;

export default function Layout({ pageContext, children }) {
  const { navItems, navItemsRight, navOffersItems, footerItems, logo } =
    useStaticQuery(
      graphql`
        query {
          logo: sanitySingletonSite(_id: { eq: "singletonSite" }) {
            logo {
              image {
                asset {
                  url
                }
              }
            }
          }
          navItems: sanitySingletonSite(_id: { eq: "singletonSite" }) {
            mainNavigation {
              slug {
                current
              }
              page {
                title {
                  fr
                }
                titleMenu {
                  fr
                }
              }
            }
          }
          navItemsRight: sanitySingletonSite(_id: { eq: "singletonSite" }) {
            mainRightNavigation {
              slug {
                current
              }
              page {
                title {
                  fr
                }
                titleMenu {
                  fr
                }
              }
            }
          }
          navOffersItems: sanitySingletonSite(_id: { eq: "singletonSite" }) {
            offersAltNav {
              slug {
                current
              }
              page {
                title {
                  fr
                }
                titleMenu {
                  fr
                }
              }
            }
          }
          footerItems: sanitySingletonSite(_id: { eq: "singletonSite" }) {
            tel
            facebook
            linkedin
            instagram
            youtube
            footerNavigation {
              id
              slug {
                current
              }
              page {
                title {
                  fr
                }
                titleMenu {
                  fr
                }
              }
            }
            copyNavigation {
              id
              slug {
                current
              }
              page {
                title {
                  fr
                }
                titleMenu {
                  fr
                }
              }
            }
            _rawAddress(resolveReferences: { maxDepth: 10 })
            _rawContact(resolveReferences: { maxDepth: 10 })
          }
        }
      `
    );
  const location = useLocation();
  const slug = location.pathname.replace(/[\/\\]/g, '');

  return (
    <div className={`app ${pageContext.slug || slug}`}>
      <GlobalStyles />
      <Typography />
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Neoden",
              "image": "",
              "@id": "",
              "url": "https://www.neoden.fr/",
              "telephone": "02 28 49 29 37",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "20 Boulevard de Berlin",
                "addressLocality": "Nantes",
                "postalCode": "44000",
                "addressCountry": "FR"
              },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Tuesday",
                  "Thursday"
                ],
                "opens": "07:30",
                "closes": "21:00"
              },{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Wednesday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "23:00"
              },{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "09:00",
                "closes": "13:00"
              }]
            }
          `}
        </script>
        {pageContext.type === 'page' && (
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Neoden",
                "alternateName": "Neoden",
                "url": "https://www.neoden.fr/",
                "logo": "${logo?.logo?.image?.asset?.url}"
              }
            `}
          </script>
        )}
      </Helmet>
      <LayoutStyles>
        <Header
          navItems={navItems}
          navItemsRight={navItemsRight}
          offersItems={navOffersItems}
        />
        <div className="content">
          {children}
          <Footer footerItems={footerItems} />
        </div>
        <CookieConsent
          location="bottom"
          buttonText="J'accepte"
          declineButtonText="Je refuse"
          cookieName="gatsby-gdpr-google-analytics"
          style={{
            background: '#E1E0DC',
            color: '#916D5B',
            fontSize: '0.875rem',
          }}
          buttonStyle={{
            background: '#fff',
            borderRadius: '5px',
            color: '#916D5B',
            fontSize: '0.875rem',
          }}
          declineButtonStyle={{
            background: '#fff',
            borderRadius: '5px',
            color: '#916D5B',
            fontSize: '0.875rem',
          }}
          expires={150}
          onAccept={() => {
            Cookies.set('gatsby-gdpr-google-tagmanager', true);
            Cookies.set('gatsby-gdpr-facebook-pixel', true);
            Cookies.set('gatsby-gdpr-google-analytics', true);
            initializeAndTrack(location);
          }}
          enableDeclineButton
          onDecline={() => {
            // clearCookies();
            Cookies.set('gatsby-gdpr-google-tagmanager', false);
            Cookies.set('gatsby-gdpr-facebook-pixel', false);
            Cookies.set('gatsby-gdpr-google-analytics', false);
            Cookies.remove('_ga');
            Cookies.remove('_gat');
            Cookies.remove('lidc');
            Cookies.remove('li_gc');
            Cookies.remove('_gid');
            Cookies.remove('_fbp');
            Cookies.remove('_gat_gtag_UA_189099477_1');
          }}
        >
          En continuant à utiliser le site, vous acceptez l’utilisation de
          cookies.
          {/* <span style={{ fontSize: '14px' }}>
            This bit of text is smaller :O
          </span> */}
        </CookieConsent>
      </LayoutStyles>
    </div>
  );
}
