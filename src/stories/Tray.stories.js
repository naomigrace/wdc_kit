import React from "react"
import {
  Tray,
  TrayNavigation,
  TrayContent,
  FlexContainer,
  Label,
  Button,
} from "../index"
import EventStick from "../components/EventStick"
import ScrollWrapper from "../components/ScrollWrapper"

export default {
  title: "Tray",
  component: Tray,
}

const eventSample = [
  {
    id: "wdc-4-4",
    venue: "pearlstreet",
    date: "2020-04-25T09:09:00.000Z",
    title: "LIVE STREAM - Martin and Kelly",
    price: 0,
    link: "https://www.pearlstreetwarehouse.com/e/live-stream-martin-and-kelly-103526560730/",
    neighborhood: "sowe",
    latitude: 38.878824,
    longitude: -77.023982
    },
    {
    id: "wdc-4-9",
    venue: "pearlstreet",
    date: "2020-04-24T09:22:00.000Z",
    title: "LIVE STREAM - Sarah Shook",
    price: 0,
    link: "https://www.pearlstreetwarehouse.com/e/live-stream-sarah-shook-103528201638/",
    neighborhood: "sowe",
    latitude: 38.878824,
    longitude: -77.023982
    },
    {
    id: "wdc-5-1",
    venue: "songbyrd",
    title: "PHIFE DAWG MEMORIAL BRUNCH",
    description: "PHIFE DAWG MEMORIAL BRUNCH Feat. People's InstinctiveNew Vinyl SundayUpstairs",
    price: 0,
    time: "11:00 AM",
    link: "https://www.songbyrddc.com/shows/2016-03-27-phife-dawg",
    tickets: "https://www.facebook.com/events/197957743915994/",
    date: "2016-03-27T15:00:00.000Z",
    neighborhood: "admo",
    latitude: 38.9223863,
    longitude: -77.0444571
    },
    {
    id: "wdc-5-8",
    venue: "songbyrd",
    title: "WILCO - SCHMILCO",
    description: "WILCO - SCHMILCO Listening Party+ GiveawaysUpstairs, All Ages",
    price: 0,
    time: "7:00 PM",
    link: "https://www.songbyrddc.com/shows/2016-09-06-wilco",
    tickets: "https://www.facebook.com/events/1777020935901839/",
    date: "2016-09-06T23:00:00.000Z",
    neighborhood: "admo",
    latitude: 38.9223863,
    longitude: -77.0444571
    },
    {
    id: "wdc-5-9",
    venue: "songbyrd",
    title: "DC: STATE OF VINYL",
    description: "DC: STATE OF VINYL Spotlighting Vinyl Records in DCfeat: SOM Records, Carpark Records, DC Soul RecordingsFurnace Records, The Vinyl DistrictDownstairs, All Ages",
    price: 0,
    time: "7:00 PM",
    link: "https://www.songbyrddc.com/shows/2016-09-29-dc-state-of-vinyl",
    tickets: "https://www.facebook.com/events/1390764774270205/",
    date: "2016-09-29T23:00:00.000Z",
    neighborhood: "admo",
    latitude: 38.9223863,
    longitude: -77.0444571
    },
    {
    id: "wdc-5-12",
    venue: "songbyrd",
    title: "MAN ABOUT A HORSE",
    description: "MAN ABOUT A HORSE Free Bluegrass Boonanza!Two Ton TwigSongbyrd and Sweetwater present Downstairs, 21+",
    price: 0,
    time: "7:00 PM",
    link: "https://www.songbyrddc.com/shows/2016-10-28-bluegrass-boonanza",
    tickets: "https://www.facebook.com/events/1795155640742102/",
    date: "2016-10-28T23:00:00.000Z",
    neighborhood: "admo",
    latitude: 38.9223863,
    longitude: -77.0444571
    },
    {
    id: "wdc-5-14",
    venue: "songbyrd",
    title: "A TRIBE CALLED QUEST LISTENING PARTY",
    description: "A TRIBE CALLED QUEST LISTENING PARTY featuring: We Got It From Here, Thanks 4 Your Serviceplus ATCQ giveaways and more!All Ages",
    price: 0,
    time: "7:00 PM",
    link: "https://www.songbyrddc.com/shows/2016-11-11-atcq",
    tickets: "https://www.facebook.com/events/1829029320665342/",
    date: "2016-11-12T00:00:00.000Z",
    neighborhood: "admo",
    latitude: 38.9223863,
    longitude: -77.0444571
    },
]

export const TraySample = () => (
  <Tray>
    <ScrollWrapper>
      <TrayNavigation>
        <Button
          small
          color={`primary_mid_wod`}
          shadow={`md`}
          style={{
            margin: `0 auto`,
            display: `block`,
          }}
        >
          show filters
        </Button>
      </TrayNavigation>
      <TrayContent>
        <Label bold size={`sm`}>
          Showing 6 events
        </Label>
        <FlexContainer directionColumn>
          {eventSample.map(event => <EventStick {...event} />
)}
        </FlexContainer>
      </TrayContent>
    </ScrollWrapper>
  </Tray>
)
