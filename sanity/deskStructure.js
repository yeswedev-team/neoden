import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem) =>
  !['menuSingleton'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site')
        .child(
          S.editor().schemaType('singletonSite').documentId('singletonSite')
        )
        .title('Menu principal')
        .child(
          S.editor().schemaType('menuSingleton').documentId('menuSingleton')
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
