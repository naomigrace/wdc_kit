import styled from "styled-components"

import { handleWhiteTextOnDark } from "../utils"
import P from "../styled/P"

const PreviewTextSmall = styled(P)`
  ${props => handleWhiteTextOnDark(props, true)};
  color: ${props => props.theme.colors.neutral_white};
  font-weight: 400;
  max-width: 30ch;
  text-align: center;
  line-height: 1.25rem;
  margin: 0 auto 2rem auto;
  padding-top: 2rem;
  margin-top: 1rem;
  border-top: 1px solid white;
`

export default PreviewTextSmall