import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const BreadcrumbsStyles = styled.div`
  color: var(--brownlighter);
  left: 0;
  padding-left: calc((100% - 79.875rem) / 2);
  position: absolute;
  top: 6.25rem;
  z-index: 2;

  a {
    color: var(--brownlighter);
    font-size: 0.875rem;
    padding: 0 8px 0 0;
    text-decoration: underline;
  }
  .mag {
    padding-left: 9px;
  }
  strong {
    font-size: 0.875rem;
    font-weight: normal;
    padding-left: 9px;
  }
`;

export default function Breadcrumb({ title, origin }) {
  return (
    <BreadcrumbsStyles className="breadcrumb">
      <div
        className="container container--xl"
        id="breadcrumbs"
        itemScope
        itemType="http://data-vocabulary.org/Breadcrumb"
      >
        <Link rel="home" to="/" itemProp="url">
          <span itemProp="title">Home</span>
        </Link>
        |
        <span
          itemProp="child"
          itemScope
          itemType="http://data-vocabulary.org/Breadcrumb"
        >
          {origin === 'blog' && (
            <>
              <Link className="mag" rel="home" to="/le-mag/" itemProp="url">
                <span itemProp="title">Le Mag</span>
              </Link>{' '}
              |
            </>
          )}
          <strong>{title}</strong>
        </span>
      </div>
    </BreadcrumbsStyles>
  );
}
