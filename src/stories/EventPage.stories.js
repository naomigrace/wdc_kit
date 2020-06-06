import React from "react"
import EventPage from "../templates/EventPage"

export default {
    title: "Event Page Template",
}

const data = {
    "id": "wdc-5-37",
    "venue": "dcimprov",
    "title": "A DAWG CALLED PHIFE",
    "description": "A DAWG CALLED PHIFE Phife Dawg Tribute EventListening Party/Dance PartySongbyrd PresentsAll Ages",
    "price": 0,
    "time": "6:00 PM",
    "link": "https://www.songbyrddc.com/shows/2017-4-08-a-dawg-called-phife",
    "tickets": "https://www.facebook.com/events/1214127422037881/",
    "date": "2017-04-08T22:00:00.000Z",
    "neighborhood": "admo",
    "latitude": 38.9223863,
    "longitude": -77.0444571
}

export const EventPageTemplateExample = () => 
    <EventPage {...data}/>
