import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import Header from "./Header"
import theme from "../styled/theme"
import "../styled/typography.css"
import "../styled/normalize.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  let themeWithMediaQueries = theme
  themeWithMediaQueries[`isDesktopOrLaptop`] = isDesktopOrLaptop

  return (
    <ThemeProvider theme={themeWithMediaQueries}>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
