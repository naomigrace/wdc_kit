const axios = require("axios")
const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
      tls: 'empty',
      net: 'empty',
      child_process: 'empty'
    }
  })
}

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { data } = await axios.get(`http://3.88.130.202:5000/events`)

  data.forEach(event => {
    const node = {
      path: `/event/${event.neighborhood}/${event.id}`,
      ...event,
      internal: {
        type: "Event",
        contentDigest: createContentDigest(event),
      },
    }
    actions.createNode(node)
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allEvent {
        nodes {
          id
          path
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const events = result.data.allEvent.nodes

  // you'll call `createPage` for each result
  events.forEach((event) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: event.path,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/EventPage.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: event.id },
    })
  })
}
