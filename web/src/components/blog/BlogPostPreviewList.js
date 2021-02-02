import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
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
  z-index: 3;

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
      background: -moz-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(81, 81, 81, 1) 100%
      );
      background: -webkit-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(81, 81, 81, 1) 100%
      );
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(81, 81, 81, 1) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#515151',GradientType=0 );

      border-radius: 0;
      bottom: 0;
      color: var(--white);
      margin-top: 0.5rem;
      padding: 0 4.75rem 2.8125rem;
      position: absolute;
      width: 100%;
    }
  }
  .firstNode__excerpt {
    max-width: 38.4375rem;
  }
  .blog-card__date {
    margin: 0;
    text-transform: uppercase;
  }
  .firstNode__excerpt {
    font-weight: 500;
  }
  .blog-card__date,
  .firstNode__excerpt,
  .section-title {
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
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
  position: relative;
  z-index: 3;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin-bottom: 2.5rem;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }

      @media screen and (min-width: 650px) {
        margin-left: 2.5rem;
        width: calc((100% - 2.5rem) / 2);

        &:nth-child(2n + 1) {
          margin-left: 0;
        }
      }

      ${mq[2]} {
        width: calc((100% - 5rem) / 3);

        &:nth-child(2n + 1) {
          margin-left: 2.5rem;
        }
        &:nth-child(3n + 1) {
          margin-left: 0;
        }
        &:last-child {
          margin-bottom: 2.5rem;
        }
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
                <p className="blog-card__date">
                  {format(parseISO(firstNode.publishedAt), 'dd MMMM yyyy', {
                    locale: fr,
                  })}
                </p>
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
