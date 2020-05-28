import styled from "styled-components"
import BoxGradient from "./BoxGradient"
import Button from "./Button"

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;

`

export const FooterActionBar = styled.div`
  margin-top: 2rem;
  margin: 0.5rem auto 0 auto;

  a {
    width: 100%;
  }

  ${Button} {
    margin-bottom: 10px;
    width: 100%;
  }

  ${props => props.theme.breakpoints.tablet} {
    a {
      width: fit-content;
    }

    ${Button} {
      margin-bottom: 0;
      width: fit-content;
    }
  }

  ${props => props.theme.breakpoints.desktop} {
    max-width: 960px;
  }

  ${BoxGradient} {
    border-radius: ${props => props.theme.radius.baby};
    box-shadow: ${props => props.theme.shadows.base_reverse};
  }
`