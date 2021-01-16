import React from 'react';
import { graphql } from 'gatsby';
import BlogPost from '../components/blog/BlogPost';

export default function BlogPostTemplate({ data, location }) {
  const { post } = data;

  return <>{post && <BlogPost location={location} {...post} />}</>;
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
