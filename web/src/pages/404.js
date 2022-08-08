import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Wavify from '../components/Wave';
import { mq } from '../styles/breakpoints';

const FourOhFourStyles = styled.div`
  position: relative;
  z-index: 3;

  .blog-article__illustr {
    max-height: calc(95vh - 73px);
    overflow: hidden;
    position: relative;

    img {
      border-radius: 0;
    }
    ${mq[3]} {
      max-height: 95vh;
    }
  }

  > .container {
    background-color: var(--white);
    margin-top: -2.5rem;
    padding: 0 5% 5rem;
    position: relative;
    z-index: 3;

    ${mq[2]} {
      margin-top: -40vw;
      padding: 3.125rem 7.3125rem 5rem;
    }

    p {
      text-align: center;
    }
  }

  .blog-article__content {
    ${mq[2]} {
      min-height: 70vh; // have sufficient space for the last posts sidebar to appear on scroll
    }
  }
`;

export const query = graphql`
  query {
    allSanitySingletonSite {
      nodes {
        defaultImage {
          asset {
            gatsbyImageData(width: 1600, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default function FourOhFourPage({ data }) {
  // console.log(data);
  const { defaultImage } = data.allSanitySingletonSite.nodes[0];
  // console.log(defaultImage);

  return (
    <FourOhFourStyles>
      <div className="blog-article__illustr">
        {defaultImage && (
          <GatsbyImage image={getImage(defaultImage?.asset)} alt="Image" />
        )}
      </div>
      <Wavify direction="up" bgcolor="#ffffff" />

      <div className="container container--md" id="content">
        <div className="blog-article__content">
          <h1 className="blogpost-title">Erreur 404&nbsp;!</h1>
          <p>Cette page n'existe pas...</p>
        </div>
      </div>
    </FourOhFourStyles>
  );
}
