import React from 'react';
import { graphql } from 'gatsby';

export default function HomePage({ pageContext, data: { singlePage } }) {
  console.log(pageContext);
  const { title } = singlePage.page;
  return <h1>{title.fr}</h1>;
}

export const query = graphql`
  query($slug: String!) {
    singlePage: sanityRoute(slug: { current: { eq: $slug } }) {
      page {
        title {
          fr
        }
        _rawText(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`;
