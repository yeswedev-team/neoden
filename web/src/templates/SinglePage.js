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
import Questions from '../components/sections/BlockQuestions';
import Video from '../components/sections/BlockVideo';
import Upload from '../components/sections/Upload';
import Text from '../components/sections/Text';
import FormSendinblue from '../components/sections/FormSendinBlue';
import Hero from '../components/Hero';
import Form from '../components/Form';
import Alert from '../components/Alert';
import OverprintLogo from '../assets/images/logo-neoden-grey-seul.inline.svg';
import SEO from '../components/SEO';

export default function SinglePage({
  pageContext,
  location,
  data: { alert, singlePage },
}) {
  const { title, titleMenu, titleSeo, descriptionSeo, content, hero } =
    singlePage.page;

  const { alertDisplay } = alert;
  const intro = content.filter((section) => section._type === 'intro');

  return (
    <>
      <SEO
        title={titleSeo || title.fr}
        location={location}
        description={descriptionSeo}
        image={
          hero[0]?.background?.mobileImage?.asset.gatsbyImageData.images
            .fallback.src ||
          intro[0]?.frontimage?.mobileImage?.asset.gatsbyImageData.images
            .fallback.src
        }
      />
      {pageContext.slug === 'home' && alertDisplay && <Alert alert={alert} />}

      {pageContext.slug !== 'home' && (
        <OverprintLogo className="overprintLogo overprintLogo--right" />
      )}
      {pageContext.slug === 'nous-contacter' && (
        <OverprintLogo className="overprintLogo overprintLogo--contact-left" />
      )}

      <Hero
        hero={hero}
        title={title}
        titleMenu={titleMenu}
        location={location}
        context={pageContext.slug}
      />

      {pageContext.slug === 'nous-contacter' && <Form />}

      <MapToComponents
        getKey={(section) => section.id || section._key}
        getType={(section) => section._type}
        list={content}
        map={{
          intro: (props) => <Intro context={pageContext.slug} {...props} />,
          blockQuestions: Questions,
          blocks: Blocks,
          ctaColumns: TwoColumnsWithOverlayedImages,
          twoColumns: TwoColumns,
          slider: Slider,
          promo: Promo,
          video: Video,
          sectionOffers: Offers,
          upload: Upload,
          form: FormSendinblue,
          richtext: Text,
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
          blockQuestions: ({ data }) => ({
            title: data.title,
            questions: data.questionsList,
            pdf: data.pdf,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
            hasDoubleBotMargin: data.hasDoubleBotMargin,
          }),
          video: ({ data }) => ({
            title: data.title,
            image: data.image,
            youtube: data.youtube,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
          }),
          upload: ({ data }) => ({
            title: data.title,
            text: data._rawText,
            pdf: data.pdf,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
            hasDoubleBotMargin: data.hasDoubleBotMargin,
          }),
          form: ({ data }) => ({
            src: data.iframeSrc,
            width: data.iframeWidth,
            height: data.iframeHeight,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
            hasDoubleBotMargin: data.hasDoubleBotMargin,
          }),
          richtext: ({ data }) => ({
            title: data.title,
            text: data._rawText,
            hasWaveDown: data.hasWaveDown,
            hasWaveUp: data.hasWaveUp,
            hasDoubleBotMargin: data.hasDoubleBotMargin,
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
            ctas: data.ctas,
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
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    alert: sanitySingletonSite {
      alertDisplay
      alertPosition
      alertDestiny {
        ... on SanityAlert {
          _key
          _type
          alertTitle
          image {
            asset {
              gatsbyImageData(width: 600, height: 345, layout: FULL_WIDTH)
            }
          }
          _rawAlertText(resolveReferences: { maxDepth: 10 })
          alertLinkText
          alertLink {
            publishedAt
            slug {
              current
            }
          }
        }
        ... on SanityForm {
          _key
          _type
          iframeSrc
          iframeWidth
          iframeHeight
        }
        ... on SanityPromo {
          _key
          _type
          bookinglink
          discount
          image {
            asset {
              gatsbyImageData(width: 600, height: 345, layout: FULL_WIDTH)
            }
          }
          offerlink
          period
          text
          title
        }
      }
    }
    singlePage: sanityRoute(slug: { current: { eq: $slug } }) {
      page {
        title {
          fr
        }
        titleMenu {
          fr
        }
        titleSeo
        descriptionSeo
        hero {
          _rawText(resolveReferences: { maxDepth: 10 })
          hasLogo
          background {
            mobileImage: bgimage {
              asset {
                gatsbyImageData(width: 1000, layout: FULL_WIDTH)
              }
            }
            desktopImage: bgimage {
              asset {
                gatsbyImageData(width: 1600, layout: FULL_WIDTH)
              }
            }
          }
          cta {
            title
            ctaPageLink {
              ... on SanityPost {
                publishedAt
                slug {
                  current
                }
                _type
              }
              ... on SanityRoute {
                slug {
                  current
                }
                _type
              }
            }
          }
        }
        content {
          ... on SanityVideo {
            _key
            _type
            title
            image {
              asset {
                gatsbyImageData(width: 1600, layout: FULL_WIDTH)
              }
            }
            youtube {
              url
            }
            hasWaveDown
            hasWaveUp
          }
          ... on SanityIntro {
            _key
            _type
            overtitle
            title
            _rawText(resolveReferences: { maxDepth: 10 })
            hasWaveDown
            hasWaveUp
            frontimage {
              mobileImage: image {
                asset {
                  gatsbyImageData(width: 768, height: 768, layout: FULL_WIDTH)
                }
              }
              desktopImage: image {
                asset {
                  gatsbyImageData(width: 1115, height: 346, layout: FULL_WIDTH)
                }
              }
            }
          }
          ... on SanityRichtext {
            _key
            _type
            _rawText(resolveReferences: { maxDepth: 10 })
            hasDoubleBotMargin
            hasWaveDown
            hasWaveUp
          }
          ... on SanityForm {
            _key
            _type
            iframeSrc
            iframeWidth
            iframeHeight
            hasDoubleBotMargin
            hasWaveDown
            hasWaveUp
          }
          ... on SanityPromo {
            _key
            _type
            bookinglink
            discount
            image {
              asset {
                gatsbyImageData(width: 600, height: 345, layout: FULL_WIDTH)
              }
            }
            offerlink
            period
            text
            title
            hasWaveDown
            hasWaveUp
          }
          ... on SanityUpload {
            _key
            _type
            hasDoubleBotMargin
            hasWaveDown
            hasWaveUp
            title
            _rawText(resolveReferences: { maxDepth: 10 })
            pdf {
              asset {
                id
                url
              }
            }
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
                  gatsbyImageData(width: 600, layout: FULL_WIDTH)
                }
              }
              imageAlt {
                asset {
                  gatsbyImageData(width: 600, layout: FULL_WIDTH)
                }
              }
              services {
                id
                title
                _rawText(resolveReferences: { maxDepth: 10 })
                image {
                  asset {
                    gatsbyImageData(width: 600, height: 393, layout: FULL_WIDTH)
                  }
                }
                offerlink
                offerlinktitle
                bookinglink
                bookinglinktitle
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
          ... on SanityBlockQuestions {
            _key
            _type
            title
            questionsList {
              id
              title
              _rawReponse(resolveReferences: { maxDepth: 10 })
            }
            pdf {
              asset {
                url
                id
              }
            }
            hasWaveDown
            hasWaveUp
            hasDoubleBotMargin
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
              ... on SanityTestimony {
                _key
                _type
                title
                listTestimonies {
                  id
                  title
                  type
                  publishedAt
                  externalLink
                  image {
                    asset {
                      gatsbyImageData(
                        width: 600
                        height: 476
                        layout: FULL_WIDTH
                      )
                    }
                  }
                  _rawText(resolveReferences: { maxDepth: 10 })
                  authors {
                    _key
                    author {
                      name
                    }
                  }
                  buttonText
                  pageLink {
                    ... on SanityPost {
                      publishedAt
                      slug {
                        current
                      }
                      _type
                    }
                    ... on SanityRoute {
                      slug {
                        current
                      }
                      _type
                    }
                  }
                }
              }
              ... on SanityOffers {
                _key
                _type
                title
                overtitle
                offerLink {
                  id
                  slug {
                    current
                  }
                  title {
                    fr
                  }
                  image {
                    asset {
                      gatsbyImageData(
                        width: 500
                        layout: CONSTRAINED, aspectRatio: 1
                      )
                    }
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
                      gatsbyImageData(width: 300, layout: FULL_WIDTH)
                    }
                  }
                  icon {
                    asset {
                      gatsbyImageData(width: 300, layout: FULL_WIDTH)
                    }
                  }
                  _rawText(resolveReferences: { maxDepth: 10 })
                  title
                }
              }
              ... on SanityCta {
                _key
                _type
                title
                ctaPageLink {
                  ... on SanityPost {
                    publishedAt
                    slug {
                      current
                    }
                    _type
                  }
                  ... on SanityRoute {
                    slug {
                      current
                    }
                    _type
                  }
                }
              }
              ... on SanityMaps {
                _key
                _type
                title
                defaultZoom
                locations {
                  _id
                  id
                  gmap {
                    lat
                    lng
                  }
                  title
                  _rawText(resolveReferences: { maxDepth: 10 })
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
                gatsbyImageData(width: 600, layout: FULL_WIDTH)
              }
            }
            frontImage {
              asset {
                gatsbyImageData(width: 600, layout: FULL_WIDTH)
              }
            }
            ctas {
              title
              ctaPageLink {
                ... on SanityPost {
                  publishedAt
                  slug {
                    current
                  }
                  _type
                }
                ... on SanityRoute {
                  slug {
                    current
                  }
                  _type
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
                gatsbyImageData(width: 468, layout: CONSTRAINED, aspectRatio: 1.5)
              }
            }
            ctas {
              title
              ctaPageLink {
                ... on SanityPost {
                  publishedAt
                  slug {
                    current
                  }
                  _type
                }
                ... on SanityRoute {
                  slug {
                    current
                  }
                  _type
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
                  gatsbyImageData(width: 600, layout: FULL_WIDTH)
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
