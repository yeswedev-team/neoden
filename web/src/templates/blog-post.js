import React from 'react';
import { graphql } from 'gatsby';
import BlogPost from '../components/blog/BlogPost';
import SEO from '../components/SEO';

export default function BlogPostTemplate({ data, location }) {
  const { post, lastposts } = data;

  return (
    <>
      <SEO
        title={post.titleSeo || post.title}
        description={post.descriptionSeo}
        image={post.mainImage?.asset.fluid.src}
      />
      {post && (
        <BlogPost location={location} {...post} {...lastposts} id="content" />
      )}
    </>
  );
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
      titleSeo
      descriptionSeo
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawText(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          name
        }
      }
      readingTime
      summary {
        title
        slug {
          current
        }
      }
    }
    lastposts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: DESC }
      filter: {
        slug: { current: { ne: null } }
        publishedAt: { ne: null }
        id: { ne: $id }
      }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              fluid(maxWidth: 200, maxHeight: 200) {
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
