import { format, isFuture, parseISO } from 'date-fns';

export function cn(...args) {
  return args.filter(Boolean).join(' ');
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(parseISO(publishedAt));
}

export function getBlogUrl(publishedAt, slug) {
  return `/le-mag/${format(parseISO(publishedAt), 'yyyy/MM')}/${
    slug.current || slug
  }`;
}

export function getPageUrl(slug) {
  return slug == 'home' ? '' : slug;
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function toPlainText(blocks) {
  if (!blocks) {
    return '';
  }
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child) => child.text).join('');
    })
    .join('\n\n');
}

export const addToRefs = (ref, el) => {
  if (el && !ref.current.includes(el)) {
    ref.current.push(el);
  }
};

export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
