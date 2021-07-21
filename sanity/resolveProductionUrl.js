import { format, parseISO } from 'date-fns';

const remoteURL = 'https://preview-neoden.gtsb.io';
const localURL = 'http://localhost:8000';
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL;

console.log(window.location.hostname);
console.log(previewURL);

const isDraft = (id) => id.includes('drafts');

export default function resolveProductionUrl(document) {
  // console.log(document);

  if (document._type === 'post') {
    const dateSegment = format(parseISO(document.publishedAt), 'yyyy/MM');
    return `${previewURL}/le-mag/${dateSegment}/${document.slug.current}`;
  }
  if (document._type === 'page') {
    if (document.slug.current === 'home') {
      return `${previewURL}/`;
    }
    return `${previewURL}/${document.slug.current}`;
  }
  // if (document._type === 'singletonFAQ') {
  //   return `${previewURL}/faq`;
  // }
  // if (document._type === 'testimony') {
  //   return `${previewURL}/temoignages/${document.slug.current}`;
  // }
  // if (document._type === 'realisation') {
  //   return `${previewURL}/realisations/${document.slug.current}`;
  // }
  return undefined;
}
