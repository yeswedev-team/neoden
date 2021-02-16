import S from '@sanity/desk-tool/structure-builder';
import { FaSitemap as SiteIcon } from 'react-icons/fa';

export default S.listItem()
  .title('Site')
  .child(
    S.document()
      .id('siteSettings')
      .schemaType('singletonSite')
      .documentId('singletonSite')
  )
  .icon(SiteIcon);
