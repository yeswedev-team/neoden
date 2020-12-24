import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';

const LayoutStyles = styled.div``;

export default function Layout({ children }) {
  const { navItems } = useStaticQuery(
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
      }
    `
  );

  return (
    <>
      <GlobalStyles />
      <Typography />
      <LayoutStyles>
        <Header navItems={navItems} />
        <div className="content">{children}</div>
      </LayoutStyles>
    </>
  );
}
