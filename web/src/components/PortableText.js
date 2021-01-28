/* eslint-disable react/destructuring-assignment */
import React from 'react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'gatsby';

const serializers = {
  types: {
    block: (props) => {
      const { style = 'normal' } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, '');
        return React.createElement(
          style,
          { className: `heading-${level}` },
          props.children
        );
      }

      const customBlocks = {
        blockquote: <blockquote>{props.children}</blockquote>,
      };

      return (
        customBlocks[style] ||
        BlockContent.defaultSerializers.types.block(props)
      );
    },
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return (
        <div className="video-wrapper">
          <YouTube videoId={id} />
        </div>
      );
    },
    separator: (props) => {
      const { style } = props.node;
      if (style === 'lineBreak') {
        return <hr className="lineBreak" />;
      }
      return null;
    },
  },
  list: (props) =>
    props.type === 'bullet' ? (
      <ul>{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    ),
  listItem: (props) =>
    props.type === 'bullet' ? (
      <li>{props.children}</li>
    ) : (
      <li>{props.children}</li>
    ),
  marks: {
    strong: (props) => <strong>{props.children}</strong>,
    em: (props) => <em>{props.children}</em>,
    sup: (props) => <sup>{props.children}</sup>,
    internalLink: ({ mark: { reference }, children }) => {
      const { slug = {} } = reference;
      const href = `/${slug.current}`;
      return <Link to={href}>{children}</Link>;
    },
    anchor: ({ mark: { anchorId }, children }) => (
      <span id={anchorId.current}>{children}</span>
    ),
  },
};

const PortableText = ({ blocks, id }) => (
  <BlockContent
    blocks={blocks}
    serializers={serializers}
    className={`block ${id || ''}`}
    renderContainerOnSingleChild
  />
);

export default PortableText;
