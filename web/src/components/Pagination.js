import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2.8125rem 0 6.25rem;
  text-align: center;

  & > * {
    display: block;
    padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    position: relative;
    text-decoration: none;

    &[aria-current],
    &.current {
      font-weight: bold;

      &:after {
        background-color: var(--brown);
        bottom: 0;
        content: '';
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 9px;
      }
    }
    &[disabled] {
      pointer-events: none;
      opacity: 0.5;
    }
  }
`;
export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <PaginationStyles>
      <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
        &#8592;
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          key={i}
          className={currentPage === 1 && i === 0 ? 'current' : ''}
          to={`${base}/${i > 0 ? i + 1 : ''}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
        &#8594;
      </Link>
    </PaginationStyles>
  );
}
