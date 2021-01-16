import path from 'path';
import { isFuture, format, parseISO } from 'date-fns';

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: { rules: [{ test: /node_modules\/paper/, use: loaders.null() }] },
    });
  }
};

async function createBlogPostPages({ graphql, actions }) {
  // Get a template for this page
  const postTemplate = path.resolve('./src/templates/blog-post.js');

  // Query all posts
  const { data } = await graphql(`
    query {
      posts: allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (data.errors) throw data.errors;
  const postEdges = (data.posts || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(parseISO(publishedAt), 'yyyy/MM');

      actions.createPage({
        path: `/le-mag/${dateSegment}/${slug.current}/`,
        component: postTemplate,
        context: { id },
      });
    });
}

async function turnRoutesIntoPages({ graphql, actions }) {
  // Get a template for this page
  const pageTemplate = path.resolve('./src/templates/SinglePage.js');
  // Query all pages
  const { data } = await graphql(`
    query {
      routes: allSanityRoute(filter: { slug: { current: { ne: "le-mag" } } }) {
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
  await Promise.all([turnRoutesIntoPages(params), createBlogPostPages(params)]);
}
