import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { format, parseISO } from 'date-fns';
import BlogPost from '../components/blog/BlogPost';
import SEO from '../components/SEO';

export default function BlogPostTemplate({ data, location }) {
  const { post, lastposts, logo } = data;

  return (
    <>
      <SEO
        title={post.titleSeo || post.title}
        description={post.descriptionSeo}
        location={location}
        image={post.mainImage?.asset.fluid.src}
      />
      <Helmet>
        <script type="application/ld+json">
          {`
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.neoden.fr/"
            },
            "headline": "${post.title}",
            "image": "${post.mainImage?.asset?.fluid?.src}",  
            "author": {
              "@type": "Person",
              "name": "Neoden"
            },  
            "publisher": {
              "@type": "Organization",
              "name": "",
              "logo": {
                "@type": "ImageObject",
                "url": "${logo?.logo?.image?.asset?.url}"
              }
            },
            "datePublished": "${format(
              parseISO(post.publishedAt),
              'yyyy-MM-dd'
            )}"
          `}
        </script>
      </Helmet>
      {post && (
        <BlogPost location={location} {...post} {...lastposts} id="content" />
      )}
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    logo: sanitySingletonSite(_id: { eq: "singletonSite" }) {
      logo {
        image {
          asset {
            url
          }
        }
      }
    }
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
