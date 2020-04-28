import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Logo, Header as StyledHeader } from "../styled"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    {/* <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      <Logo>{siteTitle}</Logo>
    </Link> */}
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
