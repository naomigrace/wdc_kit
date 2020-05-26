import styled from "styled-components"
import { motion } from "framer-motion"

export const TrayNavigation = styled(motion.div)`
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    margin: -60px 0;
`

export const TrayContent = styled.div`
    padding: 20px;
    background-color: ${props => props.theme.colors.neutral_white};
    ${props => props.theme.breakpoints.desktop} {
        max-width: 960px;
        margin: 0 auto;
    }
`

export default styled(motion.div)`
    width: 100vw;
    height: 40%;
    z-index: 0;
    background-color: ${props => props.theme.colors.neutral_white};
    box-shadow: ${props => props.theme.shadows.base_reverse};
    overflow-y: scroll;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    ${props => props.theme.breakpoints.desktop} {
        height: 50%;
    }
`