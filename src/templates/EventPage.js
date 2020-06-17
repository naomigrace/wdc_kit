import React from "react"
import Layout from "../components/Layout"
import { Location } from "@styled-icons/entypo/Location"
import { Popup as ExternalLink } from "@styled-icons/entypo/Popup"
import { Ticket } from "@styled-icons/entypo/Ticket"
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
} from "../index"
import neighborhoods from "../configs/neighborhoods"
import venues from "../configs/venues"
import GeneratePills from "../components/GeneratePills"

export default ({
  venue,
  title,
  date,
  description,
  neighborhood,
  link,
  status,
  tickets,
  latitude,
  longitude,
  handleBackButton,
  price,
}) => {
  let formattedDate = new Date(date)
  let month = formattedDate.getMonth()
  let day = formattedDate.getDate()
  let time = formattedDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })

  return (
    <Layout>
      <MainBody_EventPage>
        <div>
          <Hero image={venue} isLoading={true}>
            <HeroTitle style={{ paddingBottom: `0`}}>{title}</HeroTitle>
            <GeneratePills status={status} big={true} style={{ textAlign: `center`, paddingBottom: `2rem` }}/>
          </Hero>
          <PageContainer>
            <FlexContainer>
              <div style={{ marginRight: `70px` }}>
                <Label size={`sm`}>date &amp; time</Label>
                <P size={`xl`} serif mb={2}>
                  {month}/{day} {time && `@ ${time}`}
                </P>
              </div>

              {price !== undefined && (
                <div>
                  <Label size={`sm`}>price</Label>
                  <P size={`xl`} serif mb={2}>
                    {price === 0 ? `free` : `$${price}`}
                  </P>
                </div>
              )}
            </FlexContainer>

            {description && (
              <>
                <Label size={`sm`}>description</Label>
                <P size={`xl`} serif mb={2}>
                  {description}
                </P>
              </>
            )}

            <Label size={`sm`}>neighborhood</Label>
            <P size={`xl`} serif mb={2}>
              {neighborhoods[neighborhood]}
            </P>

            <Label size={`sm`}>venue</Label>
            <P size={`xl`} serif mb={2}>
              {venues[venue]}
            </P>
          </PageContainer>
        </div>
        <FooterContainer id="footer">
          <FooterActionBar>
            <BoxGradient gradient={`neutral_light`} padding={`chubby`}>
              <FlexContainer justifySpaceBetween wrapWrap>
                <BackButton
                  onClick={handleBackButton}
                  small
                  openStyle
                  color={`primary_mid_wod`}
                  mb={0.75}
                >
                  main map
                </BackButton>
                <div>
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <Button color={`primary_mid_wod`}>
                        <IconTextStyle iconRight>info</IconTextStyle>
                        <ExternalLink size={`1rem`} />
                      </Button>
                    </a>
                  )}
                  {tickets && (
                    <a href={tickets} target="_blank" rel="noopener noreferrer">
                      <Button color={`primary_mid_wod`}>
                        <IconTextStyle iconRight>tickets</IconTextStyle>
                        <Ticket size={`1rem`} />
                      </Button>
                    </a>
                  )}
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                      `${latitude}, ${longitude}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color={`primary_mid_wod`}>
                      <IconTextStyle iconRight>
                        google map directions
                      </IconTextStyle>
                      <Location size={`1rem`} />
                    </Button>
                  </a>
                </div>
              </FlexContainer>
            </BoxGradient>
          </FooterActionBar>
        </FooterContainer>
      </MainBody_EventPage>
    </Layout>
  )
}
