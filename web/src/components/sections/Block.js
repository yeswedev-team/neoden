/* eslint-disable react/display-name */
import React from 'react';
import { MapToComponents } from 'react-map-to-components';
import BlockOffers from './BlockOffers';
import BlockCta from './BlockCta';
import BlockTestimonies from './BlockTestimonies';
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
        getType={(section) => section._type}
        list={block}
        map={{
          offers: (props) => (
            <BlockOffers
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              hasDoubleBotMargin={hasDoubleBotMargin}
              {...props}
            />
          ),
          cta: (props) => (
            <BlockCta
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              hasDoubleBotMargin={hasDoubleBotMargin}
              title={title}
              {...props}
            />
          ),
          members: (props) => (
            <BlockMembers
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              hasDoubleBotMargin={hasDoubleBotMargin}
              {...props}
            />
          ),
          maps: (props) => (
            <BlockGmap
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              hasDoubleBotMargin={hasDoubleBotMargin}
              {...props}
            />
          ),
          testimony: (props) => (
            <BlockTestimonies
              hasWaveDown={hasWaveDown}
              hasWaveUp={hasWaveUp}
              hasDoubleBotMargin={hasDoubleBotMargin}
              {...props}
            />
          ),
        }}
        mapDataToProps={{
          offers: ({ data }) => ({
            title: data.title,
            overtitle: data.overtitle,
            offerLink: data.offerLink,
          }),
          cta: ({ data }) => ({
            buttonTitle: data.title,
            link: data.ctaPageLink,
          }),
          members: ({ data }) => ({
            title: data.title,
            subtitle: data.subtitle,
            privilegeList: data.privilegeList,
            buttonTitle: data.buttonTitle,
            membersLink: data.membersLink,
          }),
          maps: ({ data }) => ({
            title: data.title,
            defaultZoom: data.defaultZoom,
            locations: data.locations,
          }),
          testimony: ({ data }) => ({
            list: data.listTestimonies,
            title: data.title,
          }),
        }}
      />
    </>
  );
}
