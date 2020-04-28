import styled from "styled-components"

export const ScrollWrapperContainer = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`

export const ScrollToTopIconContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 2;
  cursor: pointer;
  opacity: 0.5;
  text-align: right;
  &:hover {
    opacity: 0.75;
    animation: wiggle 1s ease;
    animation-iteration-count: 1;
  }
  @keyframes wiggle {
    20% { transform: translateY(3px); }
    40% { transform: translateY(-3px); }
    60% { transform: translateY(2px); }
    80% { transform: translateY(-2px); }
    100% { transform: translateY(0); }
  }
`