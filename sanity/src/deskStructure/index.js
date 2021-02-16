import S from '@sanity/desk-tool/structure-builder';

import siteSettings from './siteSettings';
import page from './page';
import post from './post';

import JSONpreview from '../components/previews/json/JSONpreview';

// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) =>
  !['singletonSite', 'page', 'post'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Contenu')
    .items([
      siteSettings,
      page,
      post,
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

export const getDefaultDocumentNode = (props) =>
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  // const {schemaType} = props
  S.document().views([
    S.view.form(),
    S.view.component(JSONpreview).title('JSON'),
  ]);
