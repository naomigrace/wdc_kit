import React from "react"
import PropTypes from "prop-types"
import theme from "../ui/themes"
import { ThemeProvider } from "styled-components"
import "../ui/atlaskit-css-reset.css"
import "../ui/custom.scss"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <main>{children}</main>
      <div id="logo">WannaDC</div>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
