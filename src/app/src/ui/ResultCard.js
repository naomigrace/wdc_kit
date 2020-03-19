import styled from "styled-components"
import chroma from "chroma-js"
import venueColors from "../data/venueColors"

export default styled.div`
  text-align: center;
  h1,
  h2 {
    margin-top: 0;
  }
  margin: 10px 20px;
  box-shadow: ${props => props.theme.shadowBase.boxShadow};
  border: ${props => props.theme.shadowBase.border};
  border-radius: ${props => props.theme.shadowBase.borderRadius};
  background-color: #fff9;
  padding: 20px;
  a:hover {
    text-decoration: none !important;
    text-underline-position: under;
  }
  ${props => props.link && `
    &:hover {
      outline: 4px solid ${venueColors[props.venue]} !important;
      background-color: #fff;
      transition: all 0.2s ease;
    }
  `}
`
