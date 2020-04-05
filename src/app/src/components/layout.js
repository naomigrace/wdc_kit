import React from "react"
import PropTypes from "prop-types"
import theme from "../ui/themes"
import { ThemeProvider } from "styled-components"
import "../ui/atlaskit-css-reset.css"
import "../ui/typography.css"
import Sidebar from "./Sidebar"
import Main from "../ui/Main"
import Logo from "../ui/Logo"

const Layout = ({ children, sidebar }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Main>
        <Sidebar>{sidebar()}</Sidebar>
        {children}
      </Main>
      <Logo>WannaDC</Logo>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
