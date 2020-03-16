import React, { useState, useEffect } from "react"
import useSearcher from "../hooks/useSearcher"
import { DateTimePicker } from "@atlaskit/datetime-picker"
import Select from "@atlaskit/select"
import Drawer from "@atlaskit/drawer"
import Flex from "../ui/Flex"
import Results from "./Results"
import ListIcon from '@atlaskit/icon/glyph/list';

const Search = () => {
  const dateTimeNow = new Date().toISOString()
  const [date, setDate] = useState(dateTimeNow)
  const [venue, setVenue] = useState("all")
  const [price, setPrice] = useState("all")
  const [setConditions, results] = useSearcher()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    let newConditions = []
    if (date) {
      newConditions.push({ date: date })
    }
    if (venue && venue !== "all") {
      newConditions.push({ venue: venue })
    }
    if (price && price !== "all") {
      newConditions.push({ price: price })
    }
    if (newConditions.length > 0) {
      setConditions(newConditions)
    }
  }, [date, venue, price, setConditions])

  const venueOptions = [
    { value: "all", label: "all venues" },
    { value: "_930", label: "930 Club" },
    { value: "blackcat", label: "Black Cat" },
    { value: "echostage", label: "Echo Stage" },
    { value: "howardtheatre", label: "Howard Theatre" },
    { value: "pearlstreet", label: "Pearl Street" },
    { value: "songbyrd", label: "Songbyrd Cafe" },
    { value: "theanthem", label: "The Anthem" },
    { value: "unionstage", label: "Union Stage" },
    { value: "ustreet", label: "U Street Music Lounge" },
    { value: "velvetlounge", label: "The Velvet Lounge" },
  ]

  const priceOptions = [
    { value: "all", label: "all prices" },
    { value: 0, label: "free" },
    { value: 15, label: "< $15" },
    { value: 30, label: "< $30" },
    { value: 100, label: "< $100" },
  ]

  const flexGrow = { style: { flexGrow: 1, borderRadius: 0 } }

  const customStyles = {
    container: provided => ({ ...provided, flexGrow: "1" }),
    control: provided => ({
      ...provided,
      height: "100%",
      borderRadius: 0,
    }),
  }

  const ContentOverrideComponent = ({ children }) => {
    return (
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          marginTop: 60,
          margin: `60px 0 0 -68px`
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div id="search">
      <Flex>
        <DateTimePicker
          innerProps={flexGrow}
          onChange={value => setDate(value)}
          defaultValue={dateTimeNow}
        />
        <Select
          styles={customStyles}
          onChange={obj => setVenue(obj.value)}
          options={venueOptions}
          defaultValue={{ value: "all", label: "all venues" }}
        />
        <Select
          styles={customStyles}
          onChange={obj => setPrice(obj.value)}
          options={priceOptions}
          defaultValue={{ value: "all", label: "all prices" }}
        />
      </Flex>
      <div id="listButton" onClick={() => setIsDrawerOpen(!isDrawerOpen)}><ListIcon size={"medium"}/></div>
      <Drawer
        onClose={() => setIsDrawerOpen(false)}
        isOpen={isDrawerOpen}
        width="wide"
        shouldUnmountOnExit={true}
        overrides={{
          Content: {
            component: ContentOverrideComponent,
          },
        }}
      >
        <Results events={results} />
      </Drawer>
    </div>
  )
}

export default Search
