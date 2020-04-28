import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { HomePageContainer, Box } from "../styled"
import EventsAndFilterTray from "../components/EventsAndFilterTray"

const IndexPage = ({ data: { allEvent: { nodes: events } } }) => (
  <HomePageContainer>
    <Box color={`neutral_light`} style={{ height: `100%`}}/>
    <EventsAndFilterTray events={events}/>
  </HomePageContainer>
)

export default IndexPage

export const query = graphql`
  {
    allEvent {
      nodes {
        path
        date
        title
        description
        latitude
        longitude
      }
    }
  }
`
