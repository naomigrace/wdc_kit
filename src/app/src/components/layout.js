/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import theme from "../ui/themes"

import "../ui/atlaskit-css-reset.css"
import { ThemeProvider } from "styled-components"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <main>{children}</main>
      <div id="logo">WannaDC</div>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
