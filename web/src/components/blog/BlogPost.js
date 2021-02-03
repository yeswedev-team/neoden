import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import React from 'react';
import Img from 'gatsby-image';
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
      padding: 3.125rem 7.3125rem 5rem;
    }
    @media screen and (min-width: 1024px) and (max-height: 799px) {
      margin-top: -50vh;
    }
    @media screen and (min-width: 1024px) and (min-height: 800px) {
      margin-top: -60vh;
    }
    /* @media screen and (min-width: 1024px) and (min-height: 1000px) {
      margin-top: -50vh;
    } */
    @media screen and (min-width: 1024px) and (min-height: 1200px) {
      margin-top: -60vh;
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
    border: 1px solid var(--beige);
    margin-top: 3.875rem;
    padding: 2.5rem;

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
  }
  .blog-article__content {
    ${mq[2]} {
      min-height: 100vh; // have sufficient space for the last posts sidebar to appear on scroll
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
    <BlogPostStyles>
      <OverprintLogo className="overprintLogo overprintLogo--right" />
      <OverprintLogo className="overprintLogo overprintLogo--left" />
      <BlogArticleStyles className="blog-article">
        {mainImage && (
          <div className="blog-article__illustr">
            <Breadcrumb location={location} title={title} origin="blog" />
            <Img fluid={mainImage?.asset?.fluid} alt={title.fr} />
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
            {summary[0] && (
              <div className="summary">
                <h3 className="mini-title">Sommaire</h3>
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
