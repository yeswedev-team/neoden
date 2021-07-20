import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Pages')
  .schemaType('page')
  .child(
    S.documentTypeList('page')
      .title('Pages')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('page')
      )
  );
