import React, { useState } from "react"
import { VariableSizeList as List } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"

import {
  Button,
  FlexContainer,
  Label,
  Tray,
  TrayContent,
  TrayNavigation,
  P,
} from "../../index"

import EventStick from "./EventStick"
import ScrollWrapper from "./ScrollWrapper"

const PAGESIZE = 25

export default ({ events }) => {

  const Row = ({ index, style }) => {
      if(events){
        return <EventStick style={style} {...events[index]} />
      }
  }

  // const onLoadMore = () => {
  //   console.log("here")
  //   setEventsLoading(true)

  //   let lastSetOfData = events.length - (cursor + PAGESIZE) < PAGESIZE

  //   setTimeout(() => {
  //     let newEvents = !lastSetOfData
  //       ? events.slice(cursor, cursor + PAGESIZE)
  //       : events.slice(cursor)
  //     setCurrentEvents([...currentEvents, ...newEvents])
  //     !lastSetOfData ? setHasNextPage(true) : setHasNextPage(false)
  //     setCursor(cursor + PAGESIZE)
  //     setEventsLoading(false)
  //   }, 1000)
  // }

  return (
    <Tray id="scrollmaybe">
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
            {events.length} events
          </Label>
          <div style={{ height: `175px` }}>
            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  width={width}
                  itemSize={() => 90}
                  itemCount={events.length}
                >
                  {Row}
                </List>
              )}
            </AutoSizer>
          </div>
        </TrayContent>
      </ScrollWrapper>
    </Tray>
  )
}
