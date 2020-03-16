import styled from "styled-components"

export default styled.div`
  text-align: center;
  h1,
  h2 {
    margin-top: 0;
  }
  margin: 20px 0;
  // border-radius: ${props => props.theme.borderRadius};
  border: ${props => props.theme.borderWidth} solid
    ${props => props.theme.lightBlue};
  padding: 20px;
`
