import React from "react"
import Layout from "../components/Layout"
import { OpenInNew } from "@styled-icons/material/OpenInNew"
import { EventSeat } from "@styled-icons/material/EventSeat"
import {
  Hero,
  HeroTitle,
  BackButton,
  PageContainer,
  Label,
  P,
  IconTextStyle,
  Button,
  BoxGradient,
  FlexContainer,
  FooterContainer,
  FooterActionBar,
  MainBody_EventPage,
} from "../../index"
import neighborhoods from "../configs/neighborhoods"

export default ({ venue, title, date, description, neighborhood, link, tickets, handleBackButton }) => {

  let formattedDate = new Date(date)
  let month = formattedDate.getMonth()
  let day = formattedDate.getDate()
  let time = formattedDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return (
    <Layout>
      <MainBody_EventPage>
        <div>
          <Hero image={venue}>
            <HeroTitle>{title}</HeroTitle>
          </Hero>
          <PageContainer>
            <Label size={`sm`}>date &amp; time</Label>
              <P size={`xl`} bold mb={0.5}>{`${month}/${day}`}</P>
              <P size={`md`} serif mb={2}>{`${time}`}</P>

            {description && (<><Label size={`sm`}>description</Label>
            <P size={`xl`} serif mb={2}>{description}</P></>)}

            <Label size={`sm`}>neighborhood</Label>
            <P size={`xl`} serif mb={2}>{neighborhoods[neighborhood]}</P>
          </PageContainer>
        </div>
        <FooterContainer id="footer">
          <FooterActionBar>
            <BoxGradient gradient={`neutral_light`} padding={`chubby`}>
              <FlexContainer justifySpaceBetween wrapWrap>
                  <BackButton onClick={handleBackButton} small openStyle color={`primary_mid_wod`} mb={0.75}>
                    main map
                  </BackButton>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Button color={`primary_mid_wod`}>
                    <IconTextStyle iconRight>more information</IconTextStyle>
                    <OpenInNew size={`1rem`} />
                  </Button>
                </a>
                {tickets && (
                  <a href={tickets} target="_blank" rel="noopener noreferrer">
                    <Button color={`primary_mid_wod`}>
                      <IconTextStyle iconRight>get tickets</IconTextStyle>
                      <EventSeat size={`1rem`} />
                    </Button>
                  </a>
                )}
              </FlexContainer>
            </BoxGradient>
          </FooterActionBar>
        </FooterContainer>
      </MainBody_EventPage>
    </Layout>
  )
}
