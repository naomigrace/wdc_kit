import PropTypes from "prop-types"
import React from "react"
import StyledHeader from "../styled/Header"

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
