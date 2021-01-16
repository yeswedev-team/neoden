import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getBlogUrl } from '../../utils/helpers';
import BlogPostPreview from './BlogPostPreview';
import PortableText from '../PortableText';
import Wave from '../Wave';
import Breadcrumb from '../Breadcrumb';

const WaveContainerStyles = styled.div`
  background-color: rgba(145, 109, 91, 0.59);
  padding-top: 20.625rem;
  position: relative;

  canvas {
    display: block;
    transform: none;
  }
`;

const FirstNodeStyles = styled.div`
  margin-top: -10.3125rem;
  position: relative;

  .container {
    border-radius: var(--radius);
    position: relative;
    z-index: 3;
  }
  .firstPost__header {
    bottom: 0;
    color: var(--white);
    padding: 0 4.75rem 2.8125rem;
    position: absolute;
  }
  .firstNode__excerpt {
    max-width: 38.4375rem;
  }
  .section-title {
  }
  .firstNode__excerpt {
    font-weight: 500;
  }
`;

const BlogPostsListStyles = styled.div`
  margin-top: 2.75rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;

    li {
      flex-shrink: 0;
      flex-grow: 1;
      width: calc((100% - 80px) / 3);
    }
  }
`;

export default function BlogPostPreviewList({ nodes, location }) {
  const firstNode = nodes[0];
  const otherNodes = nodes.slice(1);

  return (
    <>
      <WaveContainerStyles className="wave-container">
        <Breadcrumb location={location} title="Le Mag" />
        <Wave bgcolor="white" />
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
                <BlogPostPreview {...node} isInList />
              </li>
            ))}
        </ul>
      </BlogPostsListStyles>
      <Wave bgcolor="white" reversed />
    </>
  );
}
