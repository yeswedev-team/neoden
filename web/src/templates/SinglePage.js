/* eslint-disable react/display-name */
import React from 'react';
import { graphql } from 'gatsby';
import { MapToComponents } from 'react-map-to-components';
import Blocks from '../components/sections/Block';
import TwoColumnsWithOverlayedImages from '../components/sections/TwoColumnsWithOverlayedImages';
import TwoColumns from '../components/sections/TwoColumns';
import Intro from '../components/sections/Intro';
import Slider from '../components/sections/Slider';
import Promo from '../components/sections/Promo';
import Offers from '../components/sections/Offers';
import Hero from '../components/Hero';
import Form from '../components/Form';

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
          twoColumns: TwoColumns,
          slider: Slider,
          promo: Promo,
          sectionOffers: Offers,
        }}
        mapDataToProps={{
          intro: ({ data }) => ({
            frontImage: data.frontimage,
            overtitle: data.overtitle,
            title: data.title,
            text: data._rawText,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
          }),
          ctaColumns: ({ data }) => ({
            title: data.title,
            overtitle: data.overtitle,
            backImage: data.backImage,
            frontImage: data.frontImage,
            intro: data._rawIntro,
            ctas: data.ctas,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
          }),
          twoColumns: ({ data }) => ({
            image: data.image,
            rightImage: data.rightImage,
            text: data._rawText,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
            hasDoubleBotMargin: data.hasDoubleBotMargin,
          }),
          slider: ({ data }) => ({
            title: data.title,
            overtitle: data.overtitle,
            text: data._rawIntro,
            slides: data.slides,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
          }),
          promo: ({ data }) => ({
            title: data.title,
            image: data.image,
            period: data.period,
            discount: data.discount,
            text: data.text,
            offerlink: data.offerlink,
            bookinglink: data.bookinglink,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
          }),
          sectionOffers: ({ data }) => ({
            offer: data.offer,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
          }),
          blocks: ({ data }) => ({
            block: data.block,
            title: data.title,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
            hasDoubleBotMargin: data.hasDoubleBotMargin,
          }),
        }}
      />
      {pageContext.slug === 'nous-contacter' && <Form />}
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
            hasWaveDown
            hasWaveUp
            frontimage {
              image {
                asset {
                  fluid(maxWidth: 1115, maxHeight: 346) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
          ... on SanityPromo {
            _key
            _type
            bookinglink
            discount
            image {
              asset {
                fluid(maxWidth: 600, maxHeight: 345) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            offerlink
            period
            text
            title
            hasWaveDown
            hasWaveUp
          }
          ... on SanitySectionOffers {
            _key
            _type
            offer {
              id
              title
              slug {
                current
              }
              imageTab {
                asset {
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              imageAlt {
                asset {
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              services {
                id
                title
                _rawText(resolveReferences: { maxDepth: 10 })
                image {
                  asset {
                    fluid(maxWidth: 600, maxHeight: 393) {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                offerlink
                bookinglink
                places {
                  _key
                  id
                  _rawText
                  title
                  bookingLink
                }
              }
            }
            hasWaveDown
            hasWaveUp
          }
          ... on SanityBlocks {
            id
            _key
            _type
            title
            hasWaveDown
            hasWaveUp
            hasDoubleBotMargin
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
              ... on SanityMembers {
                _key
                _type
                title
                subtitle
                membersLink
                buttonTitle
                privilegeList {
                  _key
                  bgicon {
                    asset {
                      fluid(maxWidth: 300) {
                        ...GatsbySanityImageFluid
                      }
                    }
                  }
                  icon {
                    asset {
                      fluid(maxWidth: 300) {
                        ...GatsbySanityImageFluid
                      }
                    }
                  }
                  _rawText(resolveReferences: { maxDepth: 10 })
                  title
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
              ... on SanityBlockQuestions {
                _key
                _type
                title
                questionsList {
                  id
                  title
                  _rawReponse(resolveReferences: { maxDepth: 10 })
                }
              }
              ... on SanityMaps {
                _key
                _type
                title
                defaultZoom
                locations {
                  _key
                  gmap {
                    lat
                    lng
                  }
                  name
                  _rawAddress(resolveReferences: { maxDepth: 10 })
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
            hasWaveDown
            hasWaveUp
          }
          ... on SanityTwoColumns {
            _key
            _type
            _rawText(resolveReferences: { maxDepth: 10 })
            image {
              asset {
                fluid(maxWidth: 600) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            rightImage
            hasWaveDown
            hasWaveUp
            hasDoubleBotMargin
          }
          ... on SanitySlider {
            _key
            _type
            title
            overtitle
            _rawIntro(resolveReferences: { maxDepth: 10 })
            slides {
              _key
              title
              _rawIntro(resolveReferences: { maxDepth: 10 })
              image {
                asset {
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
            hasWaveDown
            hasWaveUp
          }
        }
      }
    }
  }
`;
