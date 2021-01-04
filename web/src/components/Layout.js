import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';
import Footer from './Footer';

const LayoutStyles = styled.div``;

export default function Layout({ children }) {
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
          _rawAddress(resolveReferences: { maxDepth: 10 })
          _rawContact(resolveReferences: { maxDepth: 10 })
        }
      }
    `
  );

  return (
    <>
      <GlobalStyles />
      <Typography />
      <LayoutStyles>
        <Header navItems={navItems} />
        <div className="content">
          {children}
          <Footer footerItems={footerItems} />
        </div>
      </LayoutStyles>
    </>
  );
}
