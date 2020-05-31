import React from "react"
import PreviewContainer from "../styled/PreviewContainer"
import PreviewLogo from "../styled/PreviewLogo"
import PreviewText from "../styled/PreviewText"
import PreviewTextSmall from "../styled/PreviewTextSmall"
import Button from "../styled/Button"

export default {
    title: "Preview Landing Page",
    component: PreviewContainer
}

export const PreviewLanding = () => (
    <PreviewContainer>
      <PreviewText>washington, d.c., we really</PreviewText>
      <PreviewLogo>wannadc.</PreviewLogo>
      <PreviewText>
        it's been so long since we've seen each other, but we'll be together
        again soon ❤️
      </PreviewText>
      <PreviewTextSmall>
        Reunite safely with your favorite venues. <strong>WANNADC</strong> is
        a new centralized source for music and cultural events in the capitol
        city. <br />
        <br />
        We're a tiny team of washingtonians who need help polishing the site
        after pre-launch. Click the button below to get notified to help out.
      </PreviewTextSmall>
      <a
        href="https://forms.gle/MmPLTUKG8u6fwq5V8"
        target="_blank"
        rel="noopener"
      >
        <Button color={`primary_mid_wod`} bold mb={2} shadow={`xl`}>
          <h3
            style={{
              margin: 0,
              lineHeight: `2rem`,
              fontSize: `1.5rem`,
              textAlign: `center`,
              maxWidth: `20ch`,
            }}
          >
            notify me of pre-launch!
          </h3>
        </Button>
      </a>
  </PreviewContainer>
)

