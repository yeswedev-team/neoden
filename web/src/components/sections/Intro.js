import React, { useEffect, useState } from 'react';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Wavify from '../Wave';
import PortableText from '../PortableText';
import Overprint from '../../assets/images/ondes.inline.svg';
import { mq } from '../../styles/breakpoints';

const handleZIndex = (props) => {
  if (props.hasWaveDown) {
    return '4';
  }
  if (props.hasWaveUp && !props.hasWaveDown) {
    return '3';
  }
  return '1';
};

const IntroTextStyles = styled.section`
  background: ${({ location }) =>
    location === 'home' ? 'var(--grey)' : 'transparent'};
  background-size: cover, cover;
  background-attachment: fixed, fixed;
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  text-align: center;
  z-index: ${(props) => handleZIndex(props)};

  img {
    border-radius: var(--radius);
  }
  .gatsby-image-wrapper {
    margin-bottom: 3.75rem;
  }
  .overtitle {
    margin-bottom: 0;
  }

  .img-container {
    position: relative;
    margin-top: -6.25rem;

    ${mq[1]} {
      margin-top: 0;
    }
  }

  .overprint {
    bottom: 0;
    height: 65%;
    position: absolute;
    right: 0;
    z-index: 2;
  }
`;

const Intro = ({
  context,
  frontImage,
  overtitle,
  title,
  text,
  hasWaveDown,
  hasWaveUp,
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  let images;
  if (frontImage && frontImage.desktopImage && frontImage.mobileImage) {
    images = withArtDirection(getImage(frontImage?.desktopImage?.asset), [
      {
        media: '(max-width: 767px)',
        image: getImage(frontImage?.mobileImage?.asset),
      },
    ]);
  }

  return (
    <IntroTextStyles
      location={context}
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className={`section section__intro${hasWaveDown ? ' has-wave-down' : ''}${
        hasWaveUp ? ' has-wave-up' : ''
      }`}
    >
      {hasWaveUp && (
        <Wavify
          direction="up"
          bgcolor={`${context === 'home' ? '#F2F2F2' : 'white'}`}
        />
      )}
      <div className="container container--md">
        {frontImage && frontImage.desktopImage && frontImage.mobileImage && (
          <div className="img-container">
            <GatsbyImage image={images} alt={title} />
            <Overprint className="overprint" />
          </div>
        )}
        {overtitle && <p className="overtitle">{overtitle}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {text && <PortableText blocks={text} />}
      </div>
      {hasWaveDown && (
        <Wavify
          direction="down"
          bgcolor={`${context === 'home' ? '#F2F2F2' : 'white'}`}
        />
      )}
    </IntroTextStyles>
  );
};

export default Intro;
