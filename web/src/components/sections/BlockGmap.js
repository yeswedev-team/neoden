import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Wavify from '../Wave';
import iconMarker from '../../assets/images/marker.svg';
import iconMarkerBrown from '../../assets/images/markerBrown.svg';
import { pxtoem, pxtopc } from '../../styles/Mixins';
import { mq } from '../../styles/breakpoints';
import PortableText from '../PortableText';
import arrow from '../../assets/images/arrow.svg';

const BlockMapStyles = styled.section`
  background: var(--beigelight);
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0 !important' : 'var(--section-top-padding)'};
  position: relative;
  z-index: 3;

  .section-title {
    margin-bottom: 4.5rem;
    text-align: center;
  }

  .block-maps {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    ${mq[1]} {
      flex-wrap: nowrap;
      height: 23.875rem;
    }
  }

  .swiper-slide {
    ${mq[1]} {
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    height: 1.25rem;
    margin: 0;
    position: absolute;
    transform: translateY(-50%);
    width: 2.625rem;
    z-index: 11;

    ${mq[1]} {
      bottom: 0%;
      top: auto;
      transform: none;
    }
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 0;

    ${mq[1]} {
      left: 7.3125em;
    }
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 1.25rem;

    ${mq[1]} {
      right: 0;
    }
  }

  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after,
  .swiper-button-next:after,
  .swiper-container-rtl .swiper-button-prev:after {
    background: url(${arrow}) 0 0 no-repeat;
    content: '';
    height: 1.25rem;
    transform: scaleX(-1);
    width: 2.625rem;
  }
  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after {
    transform: none;
  }

  .maps {
    height: 23.875rem;
    margin-bottom: 1rem;
    width: 100%;
    z-index: 1;

    ${mq[1]} {
      margin-bottom: 0;
      width: ${pxtopc(695, 1001)};
    }
  }

  .address {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    ${mq[1]} {
      padding-left: ${pxtoem(117)};
      text-align: left;
    }

    &__block {
      background: transparent;
      border: none;
      color: var(--brown);
      cursor: pointer;
      opacity: 0.3;
      padding: 0;
      text-align: left;

      &:active,
      &:focus {
        outline: 0;
        border: none;
        opacity: 1;
      }

      ${mq[1]} {
        &:before {
          background: var(--brown);
          content: '';
          display: block;
          height: 1px;
          position: absolute;
          transform: translate(-20.375rem, 2.1563rem);
          width: 18.75rem;
        }
      }
    }
    .active {
      opacity: 1;
    }
    h3 {
      text-transform: uppercase;
    }

    h3,
    p {
      font-weight: normal;
      line-height: 1.4375;
      margin: 0;
    }
  }
`;

const MarkerStyles = styled.div`
  background-repeat: no-repeat;
  cursor: pointer;
  height: ${pxtoem(70)};
  transform: translate(0, -100%);
  width: ${pxtoem(70)};

  .container {
    padding-right: 6.5625rem;
  }

  &.active {
    background: url(${iconMarkerBrown});
  }

  &.inactive {
    background: url(${iconMarker});
  }
`;

const BlockGmap = ({
  title,
  defaultZoom,
  locations,
  hasWaveDown,
  hasWaveUp,
  hasDoubleBotMargin,
}) => {
  const gmapKey = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          gmap_api_key
        }
      }
    }
  `);

  const [center, setCenter] = useState({
    lat: locations[0].gmap.lat,
    lng: locations[0].gmap.lng,
  });
  const [swiper, setSwiper] = useState(null);

  const [active, setActive] = useState(0);

  function createMapOptions(maps) {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e9e9e9',
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f5f5',
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ffffff',
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#ffffff',
            },
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#ffffff',
            },
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [
            {
              color: '#ffffff',
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f5f5',
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dedede',
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on',
            },
            {
              color: '#ffffff',
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              saturation: 36,
            },
            {
              color: '#333333',
            },
            {
              lightness: 40,
            },
          ],
        },
        {
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f2f2f2',
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#fefefe',
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#fefefe',
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
      ],
    };
  }

  function handleClick(loc, index) {
    swiper.slideTo(index);
    setCenter(loc);
    setActive(index);
  }

  return (
    <BlockMapStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      hasDoubleBotMargin={hasDoubleBotMargin}
      className={`section section__map${hasWaveDown ? ' has-wave-down' : ''}${
        hasWaveUp ? ' has-wave-up' : ''
      }`}
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#EBDEDD" />}
      <div className="container container--lg">
        <h2 className="section-title">{title}</h2>
        <div className="block-maps">
          <div className="maps">
            <GoogleMapReact
              bootstrapURLKeys={{ key: gmapKey.site.siteMetadata.gmap_api_key }}
              center={{
                lat: center.lat,
                lng: center.lng,
              }}
              defaultZoom={defaultZoom}
              options={createMapOptions}
            >
              {locations.map((marker, index) => (
                <MarkerStyles
                  key={marker._id}
                  lat={marker.gmap.lat}
                  lng={marker.gmap.lng}
                  onClick={() => handleClick(marker.gmap, index)}
                  className={active === index ? 'active' : 'inactive'}
                />
              ))}
            </GoogleMapReact>
          </div>

          <Swiper
            onSwiper={setSwiper}
            spaceBetween={0}
            slidesPerView={1}
            speed={700}
            navigation
            grabCursor
            className="address"
            breakpoints={{
              // when window width is >= 768px
              768: {
                direction: 'vertical',
                slidesPerView: 3,
              },
            }}
          >
            {locations.map((location, index) => (
              <SwiperSlide key={location.id} className="slide">
                <button
                  type="button"
                  onClick={() => handleClick(location.gmap, index)}
                  className={`address__block ${
                    active === index ? 'active' : ''
                  }`}
                >
                  <h3>{location.title}</h3>
                  {location._rawText && (
                    <PortableText blocks={location._rawText} />
                  )}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {hasWaveDown && <Wavify direction="down" bgcolor="#EBDEDD" />}
    </BlockMapStyles>
  );
};

export default BlockGmap;
