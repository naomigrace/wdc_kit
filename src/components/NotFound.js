import React from "react"
import dcIllustration from "../images/washington_dc.svg"
import { motion } from "framer-motion"
import styled from "styled-components"
import P from "../styled/P"
import Button from "../styled/Button"

const NotFoundHeading = styled.h1`
    font-family: ${props => props.theme.fonts.family.display};
`

const NotFoundContainer = styled(motion.div)`
    width: 400px;
    text-align: center;
`


const NotFound404 = (...props) => {
    return  (
        <NotFoundContainer {...props}>
            <img src={dcIllustration} alt="illustration of washington dc" width={300}/>
            <NotFoundHeading>Event not found...</NotFoundHeading>
            <P>This is awkward, but we don't have an event here. We scrape for fresh events every day, so urls will change.</P>
            <a href="/"><Button bold color={`tertiary_mid_wod`} mt={1}>find new events</Button></a>
        </NotFoundContainer>
    )

}

export default NotFound404