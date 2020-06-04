import React from "react"
import CenterContainer from "../styled/CenterContainer"
import P from "../styled/P"
import { Heading1 } from "../styled/Heading"
import A from "../styled/A"

export default ({ about }) => (
  <CenterContainer>
    <div style={{ margin: `0 auto`, maxWidth: `40ch` }}>
      <Heading1>about us</Heading1>
      <P><strong>WANNADC</strong> is a new centralized source for music, comedy, and cultural events in Washington, D.C. with events located across {about.neighborhoodCount} neighborhoods and {about.venueCount} venues.</P>
      <br/>
      <P>We launched on [ insert date here ] and are just getting started. If you are a venue that would like to partner with us, reach out at <A href="mailto:hello@wannadc.com">hello@wannadc.com</A></P>
    </div>
  </CenterContainer>
)
