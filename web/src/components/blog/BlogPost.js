import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PortableText from '../PortableText';
import Wave from '../Wave';
import AuthorList from './AuthorList';
import Breadcrumb from '../Breadcrumb';
import LastPosts from './LastPosts';
import Overprint from '../../assets/images/logo-neoden-grey.inline.svg';

const BlogArticleStyles = styled.article`
  .blog-article__illustr {
    max-height: 95vh;
    overflow: hidden;
    position: relative;

    img {
      border-radius: 0;
    }
  }

  > .container {
    background-color: var(--white);
    margin-top: -60vh;
    padding: 3.125rem 7.3125rem 5rem;
    position: relative;
    z-index: 3;
  }

  .excerpt {
    font-weight: 600;
    margin-top: 1.875rem;
    padding: 0 1.875rem;
    text-align: center;
  }
  .blog-article__meta {
    color: var(--beige);
    margin-top: 32px;
    text-align: center;
  }
  .blogpost {
    border-top: 1px solid var(--beige);
    font-size: 1.25rem;
    margin-top: 2.5rem;
    padding-top: 2.5rem;

    .heading-2 {
      font-size: 2.1875rem;
      font-weight: normal;
      line-height: 1;
      margin-top: 1.5rem;
    }
    .heading-3 {
      font-size: 1.5rem;
      font-weight: normal;
      line-height: 1;
      margin-top: 1rem;
    }
    figure {
      margin: 2em -1em;
    }
    blockquote {
      font-family: var(--font-titles);
      font-size: 3.4375rem;
      font-weight: normal;
      line-height: 1;
      text-align: center;
    }
  }

  .overprint {
    top: 100vh;
    height: 40%;
    max-height: 80vh;
    position: absolute;
    right: 0;
    transform: scaleX(-1) translateX(-50%);
    z-index: -1;
  }
`;

export default function BlogPost(props) {
  const {
    edges,
    _rawExcerpt,
    _rawText,
    authors,
    title,
    location,
    mainImage,
    publishedAt,
  } = props;
  return (
    <BlogArticleStyles className="blog-article">
      <Overprint className="overprint" />
      {mainImage && (
        <div className="blog-article__illustr">
          <Breadcrumb location={location} title={title} origin="blog" />
          <Img fluid={mainImage.asset.fluid} alt={title.fr} />
        </div>
      )}
      <Wave bgcolor="white" />
      <div className="container container--md">
        <div className="blog-article__content">
          <h1 className="blogpost-title">{title}</h1>
          {_rawExcerpt && <PortableText blocks={_rawExcerpt} id="excerpt" />}
          <p className="blog-article__meta">
            {authors && <AuthorList items={authors} />}
            {publishedAt && (
              <>
                le&nbsp;
                {format(new Date(publishedAt), 'dd MMMM yyyy', {
                  locale: fr,
                })}
              </>
            )}
          </p>
          {_rawText && <PortableText blocks={_rawText} id="blogpost" />}
        </div>
        {edges && <LastPosts posts={edges} />}
      </div>
      <Wave bgcolor="white" reversed />
    </BlogArticleStyles>
  );
}
