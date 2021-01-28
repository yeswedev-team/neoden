import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Wavify from '../Wave';
import { getBlogUrl } from '../../utils/helpers';
import BlogPostPreview from './BlogPostPreview';
import PortableText from '../PortableText';
import { mq } from '../../styles/breakpoints';
import Breadcrumb from '../Breadcrumb';

const WaveContainerStyles = styled.div`
  background-color: rgba(145, 109, 91, 0.59);
  padding-top: 20.625rem;
  position: relative;

  .wave-up {
    bottom: 0;
    position: absolute;
    transform: none;
  }
`;

const FirstNodeStyles = styled.div`
  margin-top: -15.3125rem;
  position: relative;

  .container {
    border: 1px solid var(--brownlighter);
    border-radius: var(--radius);
    position: relative;
    transition: border 200ms linear;
    z-index: 3;

    &:hover {
      border: 1px solid var(--brown);
    }
  }
  .firstPost__header {
    background-color: var(--white);
    border-radius: 0 0 var(--radius) var(--radius);
    color: var(--brown);
    padding: 1.5625rem;

    ${mq[1]} {
      background-color: transparent;
      border-radius: 0;
      bottom: 0;
      color: var(--white);
      margin-top: 0.5rem;
      padding: 0 4.75rem 2.8125rem;
      position: absolute;
    }
  }
  .firstNode__excerpt {
    max-width: 38.4375rem;
  }
  .section-title {
  }
  .firstNode__excerpt {
    font-weight: 500;
  }

  ${mq[1]} {
    margin-top: -10.3125rem;

    .container,
    .container:hover {
      border: none;
    }
  }
`;

const BlogPostsListStyles = styled.div`
  margin-top: 2.75rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;

    li {
      width: 100%;

      @media screen and (min-width: 650px) {
        width: calc((100% - 2.5rem) / 2);
      }

      ${mq[2]} {
        flex-shrink: 0;
        flex-grow: 1;
        width: calc((100% - 80px) / 3);
      }
    }
  }
`;

export default function BlogPostPreviewList({ nodes, location, total }) {
  const firstNode = nodes[0];
  const otherNodes = nodes.slice(1);

  return (
    <>
      <WaveContainerStyles className="wave-container">
        <Breadcrumb location={location} title="Le Mag" />
        <Wavify direction="up" bgcolor="#ffffff" />
      </WaveContainerStyles>
      {firstNode && (
        <FirstNodeStyles className="firstPost">
          <div className="container container--xl grow">
            <Link
              to={getBlogUrl(firstNode.publishedAt, firstNode.slug.current)}
            >
              {firstNode.mainImage && firstNode.mainImage.asset && (
                <Img
                  fluid={firstNode.mainImage.asset.fluid}
                  alt={firstNode.mainImage.alt}
                />
              )}
              <div className="firstPost__header">
                <h1 className="section-title">{firstNode.title}</h1>
                {firstNode._rawExcerpt && (
                  <PortableText
                    blocks={firstNode._rawExcerpt}
                    id="firstNode__excerpt"
                  />
                )}
              </div>
            </Link>
          </div>
        </FirstNodeStyles>
      )}
      <BlogPostsListStyles className="blog-posts-list container container--lg">
        <ul>
          {otherNodes &&
            otherNodes.map((node) => (
              <li key={node.id}>
                <BlogPostPreview {...node} />
              </li>
            ))}
        </ul>
      </BlogPostsListStyles>
    </>
  );
}
