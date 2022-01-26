import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Wavify from '../Wave';
import PortableText from '../PortableText';
import AuthorList from './AuthorList';
import Breadcrumb from '../Breadcrumb';
import LastPosts from './LastPosts';
import OverprintLogo from '../../assets/images/logo-neoden-grey-seul.inline.svg';
import { mq } from '../../styles/breakpoints';
import { calcClamp } from '../../styles/Mixins';

const BlogPostStyles = styled.div`
  .overprintLogo--right {
    top: 100vh;
  }
  .overprintLogo--left {
    bottom: 25rem;
    height: 54.375rem;
    left: 0;
    top: auto;
    transform: scaleX(-1) translateX(70%);
  }
`;

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
    margin-top: -2.5rem;
    padding: 0 5% 5rem;
    position: relative;
    z-index: 3;

    ${mq[2]} {
      margin-top: -12.5rem;
      padding: 3.125rem 7.3125rem 5rem;
    }

    ${mq[3]} {
      margin-top: -18.75rem;
    }

    ${mq[4]} {
      margin-top: -25rem;
    }
    /* @media screen and (min-width: 1024px) and (max-height: 799px) {
      margin-top: -50vh;
    }
    @media screen and (min-width: 1024px) and (min-height: 800px) {
      margin-top: -60vh;
    } */
    /* @media screen and (min-width: 1024px) and (min-height: 1000px) {
      margin-top: -50vh;
    } */
    /* @media screen and (min-width: 1024px) and (min-height: 1200px) {
      margin-top: -60vh;
    } */
  }

  .excerpt {
    font-weight: normal;
    margin-top: 1.875rem;
    padding: 0 1.875rem;
    text-align: center;

    a {
      font-weight: 700;
    }
  }
  .blog-article__meta {
    color: var(--beige);
    margin-top: 32px;
    text-align: center;
  }
  .summary {
    border: 1px solid var(--beige);
    margin-top: 3.875rem;
    padding: 2.5rem;

    .mini-title {
      margin-top: 0;
    }

    ol {
      list-style: decimal;
      margin: 1em 1em 0;
    }
    li {
      margin-bottom: 0.25em;

      &:last-child {
        margin-bottom: 0;
      }
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .blog-article__content {
    ${mq[2]} {
      min-height: 100vh; /* have sufficient space for the last posts sidebar to appear on scroll */
    }
  }
  .blog-article__text {
    position: relative;
  }
  .blogpost {
    font-size: 1.25rem;
    margin-top: 2.5rem;

    .heading-2 {
      font-size: 2.1875rem;
      font-weight: normal;
      line-height: 1;
      margin-top: 2em;
      margin-bottom: 1em;
    }
    .heading-3 {
      font-size: 1.75rem;
      font-weight: normal;
      line-height: 1;
      margin-top: 2rem;
      margin-bottom: 0.75em;
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
`;

export default function BlogPost(props) {
  const {
    edges,
    _rawExcerpt,
    _rawText,
    authors,
    title,
    location,
    readingTime,
    mainImage,
    publishedAt,
    summary,
  } = props;

  return (
    <BlogPostStyles>
      <OverprintLogo className="overprintLogo overprintLogo--right" />
      <OverprintLogo className="overprintLogo overprintLogo--left" />
      <BlogArticleStyles className="blog-article">
        {mainImage && (
          <div className="blog-article__illustr">
            <GatsbyImage image={getImage(mainImage?.asset)} alt={title} />
          </div>
        )}
        <Wavify direction="up" bgcolor="#ffffff" />
        {edges.length > 0 && <LastPosts posts={edges} />}
        <div className="container container--md" id="content">
          <Breadcrumb location={location} title={title} origin="blog" />
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
              <br />
              {readingTime && <span>Temps de lecture : {readingTime}</span>}
            </p>
            {summary[0] && (
              <div className="summary">
                <p className="mini-title">Sommaire</p>
                <ol>
                  {summary.map((anchor, index) => (
                    <li key={`anchor-${index}`}>
                      <Link to={`${location.pathname}#${anchor.slug.current}`}>
                        {anchor.title}
                      </Link>
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
    </BlogPostStyles>
  );
}
