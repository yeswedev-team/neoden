import React from 'react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getBlogUrl } from '../../utils/helpers';
import PortableText from '../PortableText';

const BlogCardStyles = styled.div`
  background-color: var(--white);
  border: 1px solid var(--brownlighter);
  border-radius: var(--radius);
  height: 100%;
  transition: border 200ms linear;

  &:hover {
    border: 1px solid var(--brown);
  }

  .gatsby-image-wrapper {
    --x: ${(props) => props.objectPosition.x};
    --y: ${(props) => props.objectPosition.y};

    div[aria-hidden='true'] {
      padding-bottom: 80% !important;
    }
    img {
      object-position: var(--x) var(--y) !important;
    }
  }
  img {
    border-radius: 5px 5px 0 0;
  }
  .blog-card__content {
    background: var(--white);
    padding: 1.5rem 1.875rem;

    *:last-child {
      margin-bottom: 0;
    }
  }
  .blog-card__date {
    margin: 0;
    text-transform: uppercase;
  }
  .small-title {
    margin-top: 0.75rem;
    font-weight: 600;
    /* min-height: 2.625rem; */
  }
`;

export default function BlogPostPreview(node) {
  const objectPosition = {
    x: `${node.mainImage.hotspot.x * 100}%`,
    y: `${node.mainImage.hotspot.y * 100}%`,
  };
  return (
    <BlogCardStyles
      className="blog-card grow grow-fast"
      objectPosition={objectPosition}
    >
      <Link to={getBlogUrl(node.publishedAt, node.slug.current)}>
        {node.mainImage && node.mainImage.asset && (
          <Img fluid={node.mainImage.asset.fluid} alt={node.mainImage.alt} />
        )}
        <div className="blog-card__content">
          <p className="blog-card__date">
            {format(parseISO(node.publishedAt), 'dd MMMM yyyy', { locale: fr })}
          </p>
          <h2 className="small-title">{node.title}</h2>
          <PortableText blocks={node._rawExcerpt} id="excerpt" />
        </div>
      </Link>
    </BlogCardStyles>
  );
}
