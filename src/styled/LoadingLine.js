import styled from "styled-components"

const LoadingLine = styled.div`
  position: absolute;
  top: 0px;
  height: 5px;
  width: 100%;
  background: #777;
  animation: shimmer 2s infinite linear;
  background: linear-gradient(
    to right,
    rgb(192, 182, 242, 0.6) 4%,
    ${props => props.theme.colors.primary_light} 25%,
    rgb(192, 182, 242, 0.4) 36%
  );
  background-size: 1000px 100%;
  transition: all 250 ease-in-out;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`

export default LoadingLine