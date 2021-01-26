import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from '../utils/helpers';
import BlogPostPreviewList from '../components/blog/BlogPostPreviewList';
import Pagination from '../components/Pagination';
import Wavify from '../components/Wave';

const PostListStyles = styled.div`
  .wave-down {
    position: relative;
    z-index: 3;
  }
`;

export default function BlogIndex({ data, location, pageContext }) {
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <PostListStyles>
      {postNodes && (
        <>
          <BlogPostPreviewList
            location={location}
            nodes={postNodes}
            total={data.posts.totalCount}
          />
          <Pagination
            pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
            totalCount={data.posts.totalCount}
            currentPage={pageContext.currentPage || 1}
            base="/le-mag"
          />
          <Wavify direction="down" bgcolor="#ffffff" />
        </>
      )}
    </PostListStyles>
  );
}

export const query = graphql`
  query BlogIndexQuery($skip: Int = 0, $pageSize: Int = 10) {
    posts: allSanityPost(
      limit: $pageSize
      skip: $skip
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      totalCount
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
