module.exports = {
  siteMetadata: {
    title: `WannaDC`,
    description: `Aggregated and Curated events in the capitol city of Washington, D.C.`,
    author: `@naomigrace @nameer-rizvi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wannadc`,
        short_name: `wdc`,
        start_url: `/`,
        background: `linear-gradient(rgb(23, 43, 77), rgb(64, 50, 148))`,
        background_color: `#rgb(23, 43, 77)`,
        theme_color: `#ff382e`,
        display: `standalone`,
        icon: `src/images/wdc-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`
  ],
}
