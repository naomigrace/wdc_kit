import React, { useState, useEffect } from "react"
import { DateTimePicker } from "@atlaskit/datetime-picker"
import Select, { CheckboxSelect } from "@atlaskit/select"
import filterOptions from "../data/filterOptions"
import filterPriceOptions from "../data/filterPriceOptions"
import Flex from "../ui/Flex"
import {
  dateTimeStyles,
  tagInputStyles,
  priceInputStyles,
} from "../ui/SearchStyles"

const Search = ({ setConditions }) => {
  const dateTimeNow = new Date().toISOString()
  const [date, setDate] = useState(dateTimeNow)
  const [filters, setFilters] = useState()
  const [price, setPrice] = useState("all")

  useEffect(() => {
    let newConditions = []
    if (date) {
      newConditions.push({ date: date })
    }
    if (filters) {
      newConditions.push({ filters: filters })
    }
    if (price !== undefined && price !== "all") {
      newConditions.push({ price: price })
    }
    if (newConditions.length > 0) {
      setConditions(newConditions)
    }
  }, [date, filters, price, setConditions])

  return (
    <div id="search">
      <Flex
        style={{
          boxShadow:
            "0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)",
          maxWidth: "960px",
        }}
      >
        <DateTimePicker
          innerProps={dateTimeStyles}
          onChange={value => setDate(value)}
          defaultValue={dateTimeNow}
        />
        <CheckboxSelect
          placeholder={"filter events by venue, neighborhood, etc."}
          isMulti={true}
          styles={tagInputStyles}
          onChange={obj => setFilters(obj)}
          options={filterOptions}
        />
        <Select
          styles={priceInputStyles}
          onChange={obj => setPrice(obj.value)}
          options={filterPriceOptions}
          defaultValue={{ value: "all", label: "all prices" }}

        />
      </Flex>
    </div>
  )
}

export default Search
