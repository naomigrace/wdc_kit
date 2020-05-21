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
    defaultState: {
      justToday: true,
      price: {
        free: 1,
        "not free": 1,
      },
      neighborhoods: {
        admo: 1,
        nav: 1,
        dtn: 1,
        dup: 1,
        geo: 1,
        hst: 1,
        ivy: 1,
        log: 1,
        noma: 1,
        pet: 1,
        shaw: 1,
        sowe: 1,
        ust: 1,
        wdl: 1,
      },
      venues: {
        _930: 1,
        blackcat: 1,
        echostage: 1,
        howardtheatre: 1,
        pearlstreet: 1,
        songbyrd: 1,
        theanthem: 1,
        unionstage: 1,
        ustreet: 1,
        velvetlounge: 1,
      },
    },
  })

  return renderFilterBox()
}
