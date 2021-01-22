import React from 'react';
import { graphql } from 'gatsby';
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from '../utils/helpers';
import BlogPostPreviewList from '../components/blog/BlogPostPreviewList';

export default function BlogIndex({ data, location }) {
  console.log(location);
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <>
      {postNodes && (
        <BlogPostPreviewList location={location} nodes={postNodes} />
      )}
    </>
  );
}

export const query = graphql`
  query BlogIndexQuery {
    posts: allSanityPost(
      limit: 10
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              fluid(maxWidth: 1115, maxHeight: 456) {
                ...GatsbySanityImageFluid
              }
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;
