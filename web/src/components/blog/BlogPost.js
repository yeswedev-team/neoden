import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Wavify from '../Wave';
import PortableText from '../PortableText';
import AuthorList from './AuthorList';
import Breadcrumb from '../Breadcrumb';
import LastPosts from './LastPosts';
import Overprint from '../../assets/images/logo-neoden-grey.inline.svg';
import { mq } from '../../styles/breakpoints';
import { calcClamp } from '../../styles/Mixins';

const BlogArticleStyles = styled.article`
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
    padding: 1.125rem 5% 5rem;
    position: relative;
    z-index: 3;

    ${mq[2]} {
      margin-top: -60vh;
      padding: 3.125rem 7.3125rem 5rem;
    }
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
  .summary {
    margin-top: 3.875rem;

    ol {
      list-style: decimal;
      margin: 1em;
    }
    li {
      margin-bottom: 0.25em;
    }
  }
  .blog-article__text {
    position: relative;
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
      font-size: ${calcClamp(2.6628, 3.4375)};
      font-weight: normal;
      line-height: 1;
      margin: 1rem 0;
      text-align: center;

      ${mq[0]} {
        margin: 1rem 2.5rem;
      }
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
    summary,
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
      <Wavify direction="up" bgcolor="#ffffff" />
      {edges && <LastPosts posts={edges} />}
      <div className="container container--md" id="content">
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
          {summary && (
            <div className="summary">
              <h3 className="mini-title">Sommaire</h3>
              <ol>
                {summary.map((anchor, index) => (
                  <li key={`anchor-${index}`}>
                    <a href={`#${anchor.slug.current}`}>{anchor.title}</a>
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div className="blog-article__text">
            {_rawText && <PortableText blocks={_rawText} id="blogpost" />}
          </div>
        </div>
      </div>
      <Wavify direction="down" bgcolor="#ffffff" />
    </BlogArticleStyles>
  );
}
