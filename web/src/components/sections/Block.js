/* eslint-disable react/display-name */
import React from 'react';
import { MapToComponents } from 'react-map-to-components';
import BlockOffers from './BlockOffers';
import BlockCta from './BlockCta';
import BlockQuestions from './BlockQuestions';

export default function Block({ block, title }) {
  return (
    <>
      <MapToComponents
        getKey={(section) => section._key}
        getType={(section) => section.__typename}
        list={block}
        map={{
          SanityOffers: BlockOffers,
          SanityCta: (props) => <BlockCta title={title} {...props} />,
          SanityBlockQuestions: BlockQuestions,
        }}
        mapDataToProps={{
          SanityOffers: ({ data }) => ({
            title: data.title,
            overtitle: data.overtitle,
            offerLink: data.offerLink,
          }),
          SanityCta: ({ data }) => ({
            buttonTitle: data.title,
            link: data.ctaPageLink,
          }),
          SanityBlockQuestions: ({ data }) => ({
            title: data.title,
            questionsList: data.questionsList,
          }),
        }}
      />
    </>
  );
}
