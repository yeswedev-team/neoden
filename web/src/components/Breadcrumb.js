import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { mq } from '../styles/breakpoints';

const BreadcrumbsStyles = styled.div`
  color: var(--brownlighter);
  left: 0;
  padding-left: 5%;
  position: absolute;
  top: 1.25rem;
  z-index: 4;

  .blog-article & {
    color: var(--brown);
    left: auto;
    margin-bottom: 1rem;
    position: relative;
    top: auto;

    a {
      color: var(--brown);

      &:hover {
        color: var(--brownlight);
      }
    }
    ol {
      justify-content: center;
    }
  }

  ${mq[3]} {
    top: 10.625rem;

    .blog-article & {
      top: auto;
    }
  }

  ol {
    display: flex;
    flex-wrap: wrap;

    li {
      position: relative;
      white-space: nowrap;

      &:after {
        content: '|';
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &:first-child:after {
        display: none;
      }
      &:first-child a {
        padding-left: 0;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    padding-left: calc((100% - 79.875rem) / 2);
  }

  a {
    color: var(--brownlighter);
    font-size: 0.875rem;
    padding: 0 8px;
    text-decoration: underline;

    &:hover {
      color: var(--white);
    }
  }
  .mag {
    padding-left: 9px;
  }
  strong {
    font-size: 0.875rem;
    font-weight: normal;
    padding-left: 9px;
  }

  #breadcrumbs {
    & > span {
      cursor: default;
    }
  }
`;

export default function Breadcrumb({ title, titleMenu, origin, location }) {
  // console.log(origin);
  // console.log(location);
  return (
    <BreadcrumbsStyles className="breadcrumb">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        id="breadcrumbs"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link rel="home" to="/" itemProp="item">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {origin === 'blog' && (
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link className="mag" rel="home" to="/le-mag/" itemProp="item">
              <span itemProp="name">Le Mag</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
        )}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link to={location.pathname} itemProp="item">
            <span itemProp="name">{titleMenu || title}</span>
          </Link>
          <meta itemProp="position" content={origin === 'blog' ? '3' : '2'} />
        </li>
      </ol>
    </BreadcrumbsStyles>
  );
}
