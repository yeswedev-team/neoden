import React from 'react';
import styled from 'styled-components';

export default function AlertSimple({ content }) {
  const { iframeSrc, iframeWidth, iframeHeight } = content;
  const width = iframeWidth || '100%';
  const height = iframeHeight || '100%';
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe
      width={width}
      height={height}
      src={iframeSrc}
      frameBorder="0"
      scrolling="auto"
      allowFullScreen
      style={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%',
      }}
    />
  );
}
