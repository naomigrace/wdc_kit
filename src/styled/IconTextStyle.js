import styled from "styled-components"

export default styled.span`
  vertical-align: middle;
  ${props => props.iconLeft && `margin-left: 10px;`}
  ${props => props.iconRight && `margin-right: 10px;`}
`