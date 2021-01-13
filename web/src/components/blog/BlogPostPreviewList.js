import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getBlogUrl } from '../../utils/helpers';
import BlogPostPreview from './BlogPostPreview';
import PortableText from '../PortableText';

const FirstNodeStyles = styled.div`
  background-color: rgba(145, 109, 91, 0.59);
  padding-top: 10.3125rem;

  .container {
    position: relative;
  }
  .firstPost__header {
    bottom: 0;
    color: var(--white);
    padding: 0 4.75rem 2.8125rem;
    position: absolute;
  }
  .section-title {
  }
  .firstNode__excerpt {
    font-weight: 500;
  }
`;

export default function BlogPostPreviewList({ nodes }) {
  console.log(nodes);
  const firstNode = nodes[0];
  const otherNodes = nodes.slice(1);
  console.log(otherNodes);
  // everything before the item we want to remove
  // ...order.slice(0, index),
  // everything after the item we want to remove
  // ...order.slice(index + 1),

  return (
    <>
      {firstNode && (
        <FirstNodeStyles className="firstPost">
          <div className="container container--xl">
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
      <ul className="blog-posts-list">
        {otherNodes &&
          otherNodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
    </>
  );
}
