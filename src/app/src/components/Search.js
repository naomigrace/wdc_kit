import React, { useState, useEffect } from "react"
import { DateTimePicker } from "@atlaskit/datetime-picker"
import Select, { CheckboxSelect } from "@atlaskit/select"
import Flex from "../ui/Flex"

const Search = ({ setConditions }) => {
  const dateTimeNow = new Date().toISOString()
  const [date, setDate] = useState(dateTimeNow)
  const [venues, setVenues] = useState([{ value: "all", label: "all venues" }])
  const [price, setPrice] = useState("all")

  useEffect(() => {
    let newConditions = []
    if (date) {
      newConditions.push({ date: date })
    }
    if (venues) {
      newConditions.push({ venues: venues })
    }
    if (price && price !== "all") {
      newConditions.push({ price: price })
    }
    if (newConditions.length > 0) {
      console.log(newConditions)
      setConditions(newConditions)
    }
  }, [date, venues, price, setConditions])

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

  return (
    <div id="search">
      <Flex>
        <DateTimePicker
          innerProps={flexGrow}
          onChange={value => setDate(value)}
          defaultValue={dateTimeNow}
        />
        <CheckboxSelect
          styles={customStyles}
          onChange={obj => setVenues(obj)}
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
    </div>
  )
}

export default Search
