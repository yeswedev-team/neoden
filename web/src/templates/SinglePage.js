/* eslint-disable react/display-name */
import React from 'react';
import { graphql } from 'gatsby';
import { MapToComponents } from 'react-map-to-components';
import Blocks from '../components/sections/Block';
import TwoColumnsWithOverlayedImages from '../components/sections/TwoColumnsWithOverlayedImages';
import Intro from '../components/sections/Intro';
import Hero from '../components/Hero';

export default function SinglePage({ pageContext, data: { singlePage } }) {
  const { title, content, hero } = singlePage.page;
  return (
    <>
      <Hero hero={hero} title={title} context={pageContext.slug} />
      <MapToComponents
        getKey={(section) => section.id || section._key}
        getType={(section) => section._type}
        list={content}
        map={{
          intro: (props) => <Intro context={pageContext.slug} {...props} />,
          blocks: Blocks,
          ctaColumns: TwoColumnsWithOverlayedImages,
        }}
        mapDataToProps={{
          intro: ({ data }) => ({
            overtitle: data.overtitle,
            title: data.title,
            text: data._rawText,
            hasWave: data.hasWave,
          }),
          ctaColumns: ({ data }) => ({
            title: data.title,
            overtitle: data.overtitle,
            backImage: data.backImage,
            frontImage: data.frontImage,
            intro: data._rawIntro,
            ctas: data.ctas,
          }),
          blocks: ({ data }) => ({
            block: data.block,
            title: data.title,
          }),
        }}
      />
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    singlePage: sanityRoute(slug: { current: { eq: $slug } }) {
      page {
        title {
          fr
        }
        _rawText(resolveReferences: { maxDepth: 10 })
        hero {
          _rawText(resolveReferences: { maxDepth: 10 })
          hasLogo
          isBackground
          frontimage {
            image {
              asset {
                fluid(maxWidth: 1115, maxHeight: 346) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          background {
            bgimage {
              asset {
                fluid(maxWidth: 1600) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          cta {
            title
            ctaPageLink {
              slug {
                current
              }
            }
          }
        }
        content {
          ... on SanityIntro {
            _key
            _type
            overtitle
            title
            _rawText(resolveReferences: { maxDepth: 10 })
            hasWave
          }
          ... on SanityBlocks {
            id
            _key
            _type
            title
            block {
              ... on SanityOffers {
                _key
                title
                overtitle
                offerLink {
                  id
                  title
                  imageAlt {
                    asset {
                      fluid(maxWidth: 600, maxHeight: 707) {
                        ...GatsbySanityImageFluid
                      }
                    }
                  }
                  slug {
                    current
                  }
                }
              }
              ... on SanityCta {
                _key
                title
                ctaPageLink {
                  slug {
                    current
                  }
                }
              }
            }
          }
          ... on SanityCtaColumns {
            _key
            _type
            title
            overtitle
            _rawIntro(resolveReferences: { maxDepth: 10 })
            backImage {
              asset {
                fluid(maxWidth: 600) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            frontImage {
              asset {
                fluid(maxWidth: 600) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            ctas {
              title
              ctaPageLink {
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
  }
`;
