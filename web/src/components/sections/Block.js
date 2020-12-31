import React from 'react';
import { MapToComponents } from 'react-map-to-components';
import BlockOffers from './BlockOffers';
import BlockCta from './BlockCta';

export default function Block({ block }) {
  console.log(block);
  return (
    <>
      <MapToComponents
        getKey={(section) => section._key}
        getType={(section) => section.__typename}
        list={block}
        map={{
          SanityOffers: BlockOffers,
          SanityCta: BlockCta,
        }}
        mapDataToProps={{
          SanityOffers: ({ data }) => ({
            title: data.title,
            overtitle: data.overtitle,
            offerLink: data.offerLink,
          }),
          SanityCta: ({ data }) => ({
            title: data.title,
          }),
        }}
      />
    </>
  );
}
