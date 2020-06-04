import React from "react"
import useFilterBox from "../components/useFilterBox"
import { withA11y } from "@storybook/addon-a11y"

export default {
  title: "Filter Box",
  decorators: [withA11y],
  component: useFilterBox,
}

export const EventStickExample = () => {
  const { renderFilterBox } = useFilterBox({
    filterState: {
      exclude_status: true,
      justToday: false,
      price: {
        free: 1,
        "not free": 1,
      },
      tags: {
        mu: 0,
        co: 0,
        cu: 0,
        sp: 0,
        cm: 0,
      },
      neighborhoods: {
        admo: 0,
        nav: 0,
        dtn: 0,
        dup: 0,
        geo: 0,
        hst: 0,
        ivy: 0,
        log: 0,
        noma: 0,
        pet: 0,
        shaw: 0,
        sowe: 0,
        ust: 0,
        wdl: 0,
      },
      venues: {
        _930: 0,
        blackcat: 0,
        citywinery: 0,
        dc9: 0,
        echostage: 0,
        thehamilton: 0,
        howardtheatre: 0,
        pieshop: 0,
        pearlstreet: 0,
        songbyrd: 0,
        theanthem: 0,
        unionstage: 0,
        ustreet: 0,
        velvetlounge: 0,
      },
    },
  })

  return renderFilterBox()
}
