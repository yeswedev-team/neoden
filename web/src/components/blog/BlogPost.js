import { format, formatDistance, differenceInDays } from 'date-fns';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PortableText from '../PortableText';
import Wave from '../Wave';
import AuthorList from './AuthorList';

const BlogArticleStyles = styled.article`
  .blog-article__illustr {
    max-height: 95vh;
    overflow: hidden;
  }

  > .container {
    background-color: var(--white);
    margin-top: -40vh;
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
`;

export default function BlogPost(props) {
  const {
    _rawExcerpt,
    _rawText,
    authors,
    title,
    mainImage,
    publishedAt,
  } = props;
  console.log(authors);
  return (
    <BlogArticleStyles className="blog-article">
      {mainImage && (
        <div className="blog-article__illustr">
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
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'Do MMMM yyyy')}
              </>
            )}
          </p>
          {_rawText && <PortableText blocks={_rawText} id="blogpost" />}
        </div>
      </div>
      <Wave bgcolor="white" reversed />
    </BlogArticleStyles>
  );
}
