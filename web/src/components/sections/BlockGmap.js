import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import iconMarker from '../../assets/images/marker.svg';
import iconMarkerBrown from '../../assets/images/markerBrown.svg';
import { pxtoem } from '../../styles/Mixins';
import Wave from '../Wave';
import PortableText from '../PortableText';

const BlockMapStyles = styled.section`
  background: var(--beigelight);
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};

  .section-title {
    margin-bottom: 1.75rem;
    text-align: center;
  }

  .maps {
    height: 23.875rem;
    width: clamp(21.6875rem, 62.33%, 43.4375rem);
    z-index: 1;
  }

  .block-maps {
    display: flex;
    justify-content: space-between;
  }

  .address {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: ${pxtoem(117)};

    &-block {
      background: transparent;
      border: none;
      color: var(--brown);
      cursor: pointer;
      margin: 1.875rem 0;
      opacity: 0.3;
      padding: 0;
      text-align: left;

      &:active,
      &:focus {
        outline: 0;
        border: none;
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

    .active {
      opacity: 1;
    }
  }
`;

const MarkerStyles = styled.div`
  background-repeat: no-repeat;
  cursor: pointer;
  height: ${pxtoem(70)};
  transform: translate(0, -100%);
  width: ${pxtoem(70)};

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
}) => {
  console.log({ locations });

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

  const [active, setActive] = useState(`${locations[0]._key}`);

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

  function handleClick(loc, key) {
    setCenter(loc);
    setActive(key);
  }

  return (
    <BlockMapStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className="section section__map"
    >
      {hasWaveUp && <Wave bgcolor="white" />}
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
              {locations.map((marker) => (
                <MarkerStyles
                  key={marker._key}
                  lat={marker.gmap.lat}
                  lng={marker.gmap.lng}
                  onClick={() => handleClick(marker.gmap, marker._key)}
                  className={active === marker._key ? 'active' : 'inactive'}
                />
              ))}
              {hasWaveDown && <Wave bgcolor="white" reversed />}
            </GoogleMapReact>
          </div>

          <div className="address">
            {locations.map((location) => (
              <button
                type="button"
                key={location._key}
                onClick={() => handleClick(location.gmap, location._key)}
                className={`address-block ${
                  active === location._key ? 'active' : ''
                }`}
              >
                <h3>{location.name}</h3>
                {location._rawAddress && (
                  <PortableText blocks={location._rawAddress} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </BlockMapStyles>
  );
};

export default BlockGmap;
