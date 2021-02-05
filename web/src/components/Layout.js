import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'normalize.css';
import styled from 'styled-components';
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from 'react-cookie-consent';
import { useLocation } from '@reach/router'; // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';
import Footer from './Footer';

const LayoutStyles = styled.div``;

export default function Layout({ pageContext, children }) {
  const { navItems, footerItems } = useStaticQuery(
    graphql`
      query {
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
        footerItems: sanitySingletonSite(_id: { eq: "singletonSite" }) {
          tel
          facebook
          linkedin
          instagram
          twitter
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
  // console.log(getCookieConsentValue());
  const location = useLocation();

  return (
    <div className={`app ${pageContext.slug}`}>
      <GlobalStyles />
      <Typography />
      <LayoutStyles>
        <Header navItems={navItems} />
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
            initializeAndTrack(location);
          }}
          enableDeclineButton
          onDecline={() => {}}
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
