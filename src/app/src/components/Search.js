import React, { useState, useEffect } from "react"
import chroma from "chroma-js"
import { DateTimePicker } from "@atlaskit/datetime-picker"
import Select, { CheckboxSelect } from "@atlaskit/select"
import venueColors from "../data/venueColors"
import Flex from "../ui/Flex"

const Search = ({ setConditions }) => {
  const dateTimeNow = new Date().toISOString()
  const [date, setDate] = useState(dateTimeNow)
  const [venues, setVenues] = useState([{ value: "all", label: "all venues" }])
  const [price, setPrice] = useState("all")

  useEffect(() => {
    console.log('in here')
    let newConditions = []
    if (date) {
      newConditions.push({ date: date })
    }
    if (venues) {
      newConditions.push({ venues: venues })
    }
    if (price !== undefined && price !== "all") {
      newConditions.push({ price: price })
    }
    if (newConditions.length > 0) {
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

  const dateTimeStyles = { 
    style: { 
      flexGrow: 1, 
      borderRadius: 0,
      maxWidth: 200, 
    } 
  }

  const tagInputStyles = {
    container: provided => ({ ...provided, flexGrow: "1" }),
    control: provided => ({
      ...provided,
      height: "100%",
      borderRadius: 0,
    }),
    multiValue: (styles, { data }) => {
      const color = chroma(venueColors[data.value]);
      return {
        ...styles,
        backgroundColor: color.alpha(0.2).css(),
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        fontWeight: "bold",
      };
    }
  }

  const priceInputStyles = {
    container: provided => ({ ...provided, flexGrow: "1", maxWidth: 150 }),
    control: provided => ({
      ...provided,
      height: "100%",
      maxWidth: 150,
      borderRadius: 0,
      marginRight: 0,
    }),
    menu: provided => ({
      ...provided,
      maxWidth: 150
    })
  }

  return (
    <div id="search">
      <Flex style={{ boxShadow: "0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)", maxWidth: "960px" }}>
        <DateTimePicker
          innerProps={dateTimeStyles}
          onChange={value => setDate(value)}
          defaultValue={dateTimeNow}
        />
        <CheckboxSelect
          styles={tagInputStyles}
          onChange={obj => setVenues(obj)}
          options={venueOptions}
          defaultValue={{ value: "all", label: "all venues" }}
        />
        <Select
          styles={priceInputStyles}
          onChange={obj => setPrice(obj.value)}
          options={priceOptions}
          defaultValue={{ value: "all", label: "all prices" }}
        />
      </Flex>
    </div>
  )
}

export default Search
