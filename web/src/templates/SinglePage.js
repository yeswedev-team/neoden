import React from 'react';
import { graphql } from 'gatsby';
import { MapToComponents } from 'react-map-to-components';
import PortableText from '../components/PortableText';
import Blocks from '../components/sections/Block';
import TwoColumnsWithOverlayedImages from '../components/sections/TwoColumnsWithOverlayedImages';

export default function SinglePage({ pageContext, data: { singlePage } }) {
  console.log(pageContext);
  const { title, content, _rawText } = singlePage.page;
  console.log(content);
  return (
    <>
      <section className="intro-text">
        <div className="container container--lg">
          <h1>{title.fr}</h1>
          <PortableText blocks={_rawText} />
        </div>
      </section>
      <MapToComponents
        getKey={(section) => section.id || section._key}
        getType={(section) => section._type}
        list={content}
        map={{
          blocks: Blocks,
          ctaColumns: TwoColumnsWithOverlayedImages,
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
        content {
          ... on SanityBlocks {
            id
            _key
            _type
            title
            _rawBlock(resolveReferences: { maxDepth: 10 })
          }
          ... on SanityCtaColumns {
            _key
            _type
          }
        }
      }
    }
  }
`;
