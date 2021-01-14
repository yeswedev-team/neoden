/* eslint-disable react/display-name */
import React from 'react';
import { MapToComponents } from 'react-map-to-components';
import BlockOffers from './BlockOffers';
import BlockCta from './BlockCta';
import BlockQuestions from './BlockQuestions';
import BlockMembers from './BlockMembers';
import BlockGmap from './BlockGmap';

export default function Block({
  block,
  title,
  hasWaveDown,
  hasWaveUp,
  hasDoubleBotMargin,
}) {
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
              hasDoubleBotMargin={hasDoubleBotMargin}
              {...props}
            />
          ),
          SanityCta: (props) => (
            <BlockCta
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              hasDoubleBotMargin={hasDoubleBotMargin}
              title={title}
              {...props}
            />
          ),
          SanityBlockQuestions: (props) => (
            <BlockQuestions
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              hasDoubleBotMargin={hasDoubleBotMargin}
              {...props}
            />
          ),
          SanityMembers: (props) => (
            <BlockMembers
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              hasDoubleBotMargin={hasDoubleBotMargin}
              {...props}
            />
          ),
          SanityMaps: (props) => (
            <BlockGmap
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              hasDoubleBotMargin={hasDoubleBotMargin}
              {...props}
            />
          ),
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
          SanityMembers: ({ data }) => ({
            title: data.title,
            subtitle: data.subtitle,
            privilegeList: data.privilegeList,
            buttonTitle: data.buttonTitle,
            membersLink: data.membersLink,
          }),
          SanityMaps: ({ data }) => ({
            title: data.title,
            defaultZoom: data.defaultZoom,
            locations: data.locations,
          }),
        }}
      />
    </>
  );
}
