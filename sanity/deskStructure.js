import S from '@sanity/desk-tool/structure-builder';
import { CgMenu as MenuIcon } from 'react-icons/cg';
import { FaSitemap as SiteIcon } from 'react-icons/fa';

const hiddenDocTypes = (listItem) =>
  !['menuSingleton', 'singletonSite'].includes(listItem.getId());

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
      S.listItem()
        // .schemaType('menuSingleton')
        .title('Menu principal')
        .icon(MenuIcon)
        .child(
          S.document().schemaType('menuSingleton').documentId('menuSingleton')
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
