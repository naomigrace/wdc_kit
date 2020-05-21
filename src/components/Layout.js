import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import { useMediaQuery } from "react-responsive"
import Header from "./Header"
import theme from "../styled/theme"
import "../sheets/global.css"
import "../sheets/normalize.css"

const Layout = ({ children }) => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  let themeWithMediaQueries = theme
  themeWithMediaQueries[`isDesktopOrLaptop`] = isDesktopOrLaptop

  return (
    <ThemeProvider theme={themeWithMediaQueries}>
      <Header siteTitle="wdc" />
      {children}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
