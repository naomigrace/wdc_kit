import React from "react"
import AboutPage from "../templates/AboutPage"
import neighborhoods from "../configs/neighborhoods"
import venues from "../configs/venues"

export default {
    title: "About Page Template",
}

const about = {
    neighborhoodCount: Object.keys(neighborhoods).length,
    venueCount: Object.keys(venues).length,
    ng: "ng",
    nameer: "nameer"
}

export const AboutPageTemplateExample = () => 
    <AboutPage about={about}/>
