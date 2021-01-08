import S from '@sanity/desk-tool/structure-builder';
import { FaQuestion as FaqIcon, FaSitemap as SiteIcon } from 'react-icons/fa';

const hiddenDocTypes = (listItem) =>
  !['singletonSite'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Contenu')
    .items([
      S.listItem()
        // .schemaType('singletonSite')
        .title('Site')
        .icon(SiteIcon)
        .child(
          S.document().schemaType('singletonSite').documentId('singletonSite')
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      // Add a visual divider (optional)
      S.divider(),
    ]);
