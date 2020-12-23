import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';

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
        <Nav navItems={navItems} />
        <div className="content">{children}</div>
      </LayoutStyles>
    </>
  );
}
