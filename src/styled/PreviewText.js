import styled from "styled-components"

const PreviewText = styled.h2`
  text-align: center;
  display: inline-block;
  font-family: ${props =>
    props.family
      ? props.theme.fonts[props.family]
      : props.theme.fonts.family.sans};
  font-weight: 800;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  ${props => props.family === "serif" && `border-bottom: 1px solid white`};
  max-width: 20ch;
  line-height: 2rem;
`

export default PreviewText
