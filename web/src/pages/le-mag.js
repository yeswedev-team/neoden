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
import OverprintLogo from '../assets/images/logo-neoden-grey-seul.inline.svg';
import SEO from '../components/SEO';

const PostListStyles = styled.div`
  position: relative;

  .wave-down {
    bottom: 0;
    position: absolute;
    z-index: 3;
  }
  .overprintLogo--right {
    z-index: 5;
  }
  .overprintLogo--left {
    /* bottom: 25rem; */
    height: 54.375rem;
    left: 0;
    top: auto;
    transform: scaleX(-1) translateX(70%);
  }
`;

export default function BlogIndex({ data, location, pageContext }) {
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  const { title, titleSeo, descriptionSeo } = data.leMagPage.page;

  return (
    <>
      <SEO title={titleSeo || title.fr} description={descriptionSeo} />
      <PostListStyles>
        {postNodes && (
          <>
            <OverprintLogo className="overprintLogo overprintLogo--right" />
            <OverprintLogo className="overprintLogo overprintLogo--left" />
            <BlogPostPreviewList
              location={location}
              nodes={postNodes}
              total={data.posts.totalCount}
            />
            {data.posts.totalCount > 10 && (
              <Pagination
                pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
                totalCount={data.posts.totalCount}
                currentPage={pageContext.currentPage || 1}
                base="/le-mag"
              />
            )}
            <Wavify direction="down" bgcolor="#ffffff" />
          </>
        )}
      </PostListStyles>
    </>
  );
}

export const query = graphql`
  query BlogIndexQuery($skip: Int = 0, $pageSize: Int = 10) {
    leMagPage: sanityRoute(slug: { current: { eq: "le-mag" } }) {
      page {
        title {
          fr
        }
        titleSeo
        descriptionSeo
      }
    }
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
            hotspot {
              height
              width
              x
              y
            }
            asset {
              fluid(maxWidth: 1115, maxHeight: 456) {
                ...GatsbySanityImageFluid_noBase64
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
