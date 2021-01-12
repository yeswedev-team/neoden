import React from 'react';
import { graphql } from 'gatsby';

export default function BlogPost({ data }) {
  const { post } = data;
  console.log(post);
  return <h1>This is a blog post</h1>;
}

export const query = graphql`
  query($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      mainImage {
        asset {
          fluid(maxWidth: 1600) {
            ...GatsbySanityImageFluid
          }
        }
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawText(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          name
        }
      }
    }
  }
`;
