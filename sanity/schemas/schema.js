// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import localeString from './objects/localeString';

// document schemas
import singletonSite from './documents/singletonSite';
import page from './documents/page';
import route from './documents/route';
import offre from './documents/offre';
import service from './documents/service';
import faq from './documents/faq';
import blocks from './documents/blocks';
import author from './documents/author';
import post from './documents/post';

import * as plugs from './plugs';
import plugDefaultFields from './plugs/_plugDefaultFields';

// Object types
import cta from './objects/cta';
import logo from './objects/logo';
import mainImage from './objects/mainImage';
import authorReference from './objects/authorReference';

const allPlugs = Object.values(plugs).map((plug) => ({
  ...plug,
  fields: plugDefaultFields.concat(plug.fields),
}));

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      localeString,
      singletonSite,
      page,
      route,
      offre,
      service,
      blocks,
      faq,
      cta,
      logo,
      post,
      author,
      mainImage,
      authorReference,
    ])
    .concat(allPlugs),
});
