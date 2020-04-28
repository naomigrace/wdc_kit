import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import { formattedTimestamp } from "simpul"
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
  Box,
  BoxGradient,
  FlexContainer,
  FooterContainer,
  FooterActionBar,
  FooterBottomBits,
  MainBody_EventPage,
  UpButton,
} from "../styled"
import neighborhoods from "../configs/neighborhoods"
import footerContent from "../configs/footerContent"

// export default ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export default ({
  data: {
    allEvent: {
      nodes: [
        {
          id,
          neighborhood,
          venue,
          date,
          time,
          title,
          description,
          link,
          latitude,
          longitude,
          tickets,
          price,
        },
      ],
    },
  },
}) => {
  return (
    <Layout>
      <MainBody_EventPage>
        <div>
          <Hero image={venue}>
            <HeroTitle>{title}</HeroTitle>
          </Hero>
          <PageContainer>
            <Label size={`sm`}>date &amp; time</Label>
            {/* <Box shadow={`base`} color={`neutral_white`} mb={2} padding={`chubby`} radius={`mini`} fitContent style={{ textAlign: `center`}}> */}
              <P size={`xl`} bold mb={0.5}>{formattedTimestamp(new Date(date), "M/D")}</P>
              <P size={`md`} serif mb={2}>{formattedTimestamp(new Date(date), "h:m p")}</P>
            {/* </Box> */}

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

              <AniLink
                  to={`/`}
                  direction="right"
                  cover
                  duration={1.25}
                  bg={`linear-gradient(rgb(101, 84, 192), rgb(64, 50, 148))`}
                  style={{width: `100%`, textDecoration: `none`, marginBottom: `10px`}}
                >
                  <BackButton small openStyle color={`primary_mid_wod`}>
                    main map
                  </BackButton>
                  </AniLink>

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

export const query = graphql`
  query getEvent($id: String) {
    allEvent(filter: { id: { eq: $id } }, limit: 1) {
      nodes {
        id
        neighborhood
        venue
        date
        time
        title
        description
        link
        latitude
        longitude
        tickets
        price
      }
    }
  }
`
