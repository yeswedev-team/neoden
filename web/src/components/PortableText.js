import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'gatsby';
// import { serializers } from '@sanity/block-content-to-react/lib/targets/dom';

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
