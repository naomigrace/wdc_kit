import styled from "styled-components"
import { imageResolver, handleWhiteTextOnDark } from "../styled/utils"

export const HeroTitle = styled.h1`
  color: ${props => props.theme.colors.neutral_white};
  text-align: center;
  padding: 5rem 2rem 5rem 2rem;
  ${props => handleWhiteTextOnDark(props, true)};
  font-weight: 400;
  font-family: ${props => props.theme.fonts.family.display};
  letter-spacing: 1px;
  font-size: 2.5rem;
  max-width: 35;
  margin: 0;

  ${props => props.theme.breakpoints.tablet_portrait} {
    padding: 6rem 4rem 4rem 4rem;
    font-size: 3rem;
  }
`

export default styled.div`
  background: linear-gradient(${props => props.theme.gradients.primary_opaque_wod}),
    url(${props => imageResolver(props.image)});
  background-size: cover;
  background-position-y: center;
  min-height: 100px;
  width: 100%;
`
