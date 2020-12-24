import path from 'path';

async function turnRoutesIntoPages({ graphql, actions }) {
  // Get a template for this page
  const pageTemplate = path.resolve('./src/templates/SinglePage.js');
  // Query all pages
  const { data } = await graphql(`
    query {
      routes: allSanityRoute {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  // Loop over each page and create a page for that page
  data.routes.nodes.forEach((page) => {
    let uri = page.slug.current;
    if (page.slug.current === 'home') {
      uri = '';
    }
    console.log(page.slug.current);
    actions.createPage({
      path: `/${uri}`,
      component: pageTemplate,
      context: {
        slug: page.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // run promises concurrently (at the same time) || wait for all promises to be resolved before finishing this function
  await Promise.all([turnRoutesIntoPages(params)]);
}
