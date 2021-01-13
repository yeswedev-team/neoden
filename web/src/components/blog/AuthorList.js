import React from 'react';

export default function AuthorList({ items }) {
  return (
    <>
      Par&nbsp;
      {items.map(({ author, _key }) => {
        const authorName = author && author.name;
        return <span key={_key}>{authorName}</span>;
      })}
      ,&nbsp;
    </>
  );
}
