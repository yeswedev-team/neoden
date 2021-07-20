import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Billets de blog')
  .schemaType('post')
  .child(
    S.documentTypeList('post')
      .title('Billets de blog')
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType('post')
      )
  );
