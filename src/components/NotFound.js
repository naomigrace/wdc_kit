import React from "react"
import dcIllustration from "../images/washington_dc.svg"
import { motion } from "framer-motion"
import styled from "styled-components"
import P from "../styled/P"
import Button from "../styled/Button"
import { Heading1 } from "../styled/Heading"


const NotFoundContainer = styled(motion.div)`
    max-width: 250px;
    text-align: center;
    margin: 0 auto;
`


const NotFound404 = (...props) => {
    return  (
        <NotFoundContainer {...props}>
            <img src={dcIllustration} alt="illustration of washington dc" width={200}/>
            <Heading1>Event not found...</Heading1>
            <P>This is awkward, but we don't have an event here. We scrape for fresh events every day, so urls will change.</P>
            <a href="/"><Button bold color={`tertiary_mid_wod`} mt={1}>find new events</Button></a>
        </NotFoundContainer>
    )

}

export default NotFound404