const path = require('path');
const { isFuture, format, parseISO } = require('date-fns');

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
        context: {
          id,
          slug: edge.node.slug.current,
        },
      });
    });
}

async function turnPostsIntoPages({ graphql, actions }) {
  // Get a template for this page
  const blogTemplate = path.resolve('./src/pages/le-mag.js');

  // Query all posts
  const { data } = await graphql(`
    query {
      posts: allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        totalCount
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

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.posts.totalCount / pageSize);

  const postsList = postEdges.filter(
    (edge) => !isFuture(parseISO(edge.node.publishedAt))
  );

  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/le-mag/${i + 1}`,
      component: blogTemplate,
      // this data is passed to the template when we create it
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
        slug: 'le-mag',
      },
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

async function createPages(params) {
  // Create pages dynamically
  // run promises concurrently (at the same time) || wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnRoutesIntoPages(params),
    turnPostsIntoPages(params),
    createBlogPostPages(params),
  ]);
}

module.exports.createPages = createPages;
