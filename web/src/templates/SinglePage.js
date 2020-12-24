import React from 'react';
import { graphql } from 'gatsby';

export default function HomePage({ pageContext, data }) {
  console.log(pageContext);
  console.log(data);
  return <p>title</p>;
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
