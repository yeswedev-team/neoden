import React, { useRef } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import Modal from '../Modal';

const VideoStyles = styled.section`
  /* padding-bottom: calc(var(--section-bot-padding) * 2);
  padding-top: calc(var(--section-top-padding) * 2); */
  padding: 0 !important;
  position: relative;
  z-index: 1;

  .video__illustr {
    height: 24.375rem;
    overflow: hidden;
  }
  .video__content {
    left: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .section-title {
    color: var(--white);
  }
  .button--play {
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    border-radius: 100%;
    cursor: pointer;
    height: 10.1875rem;
    margin: 1.5rem auto 0;
    padding: 0;
    position: relative;
    text-align: center;
    width: 10.1875rem;

    &:focus,
    &:active {
      outline: none;
    }

    svg {
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-37%, -50%);
      width: 5rem;
    }
  }
`;

export default function BlockVideo({ title, image, youtube }) {
  const modalRef = useRef();
  const id = getYouTubeId(youtube.url);

  return (
    <VideoStyles className="section section__video">
      {image && (
        <div className="video__illustr">
          <Img fluid={image.asset.fluid} alt={title} />
        </div>
      )}
      {title && (
        <div className="video__content">
          <h2 className="section-title">{title}</h2>

          <button
            type="button"
            className="button--play"
            onClick={() => modalRef.current.openModal()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 95">
              <path
                fill="#fff"
                d="M47.5,0,95,82H0Z"
                transform="rotate(90 41 41)"
              />
            </svg>

            <span className="sr-only">Play</span>
          </button>
          <Modal ref={modalRef}>
            <div className="video-wrapper">
              <YouTube videoId={id} />
            </div>
          </Modal>
        </div>
      )}
    </VideoStyles>
  );
}
