/* eslint-disable react/display-name */
import React from 'react';
import { MapToComponents } from 'react-map-to-components';
import BlockOffers from './BlockOffers';
import BlockCta from './BlockCta';
import BlockQuestions from './BlockQuestions';
import BlockGmap from './BlockGmap';

export default function Block({ block, title, hasWaveDown, hasWaveUp }) {
  return (
    <>
      <MapToComponents
        getKey={(section) => section._key}
        getType={(section) => section.__typename}
        list={block}
        map={{
          SanityOffers: (props) => (
            <BlockOffers
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              {...props}
            />
          ),
          SanityCta: (props) => (
            <BlockCta
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              title={title}
              {...props}
            />
          ),
          SanityBlockQuestions: (props) => (
            <BlockQuestions
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              {...props}
            />
          ),
          SanityMaps: (props) => <BlockGmap {...props} />,
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
          SanityMaps: ({ data }) => ({
            title: data.title,
          }),
        }}
      />
    </>
  );
}
