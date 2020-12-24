import path from 'path';

async function turnRoutesIntoPages({ graphql, actions }) {
  // Get a template for this page
  const pageTemplate = path.resolve('./src/pages/index.js');
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
    actions.createPage({
      path: `/${page.slug.current}`,
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
