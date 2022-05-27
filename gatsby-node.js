const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const response = await graphql(`
        query {
            allContentfulCopertina {
                edges {
                    node {
                        id
                    }
                }
            }
        }
  `)
    response.data.allContentfulCopertina.edges.forEach(edge => {
        createPage({
            path: `/copertina/${edge.node.id}`,
            component: path.resolve("./src/templates/copertina.js"),
            context: {
                id: edge.node.id,
            },
        })
    })
}