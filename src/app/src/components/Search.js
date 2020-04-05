import React from "react"
import { DateTimePicker } from "@atlaskit/datetime-picker"
import Select, { CheckboxSelect } from "@atlaskit/select"
import filterOptions from "../data/filterOptions"
import filterPriceOptions from "../data/filterPriceOptions"
import FilterInput from "../ui/FilterInput"

import SearchContainer, {
  dateTimeStyles,
  tagInputStyles,
  priceInputStyles,
} from "../ui/SearchStyles"


const Search = ({
  isMobile,
  setJustToday,
  setDate,
  setFilters,
  setPrice,
  justToday,
  date,
  filters,
  price,
}) => {

  const handlePriceClick = () => {
    if(price.value === "all"){
      setPrice({ label: "free", value: 0 })
    } else {
      setPrice({ label: "all", value: "all"})
    }
  }

  const handleDateClick = () => {
    // if(justToday){
    setJustToday(!justToday)
    // }
  }


    return (
    <SearchContainer isMobile={isMobile}>
      <FilterInput active={justToday} onClick={() => handleDateClick()}>{justToday ? "today only" : "today and beyond"}</FilterInput>
      <FilterInput>neighborhoods</FilterInput>
      <FilterInput>venues</FilterInput>
      <FilterInput active={price.label === "free"} onClick={() => handlePriceClick()}>price ({price.label})</FilterInput>



      {/* <DateTimePicker
        innerProps={dateTimeStyles}
        onChange={value => setDate(value)}
        value={date}
        id="search-date"
      />
      <CheckboxSelect
        id="search-filters"
        placeholder={"filter events by venue, neighborhood, etc."}
        isMulti={true}
        styles={tagInputStyles}
        onChange={obj => setFilters(obj)}
        options={filterOptions}
        defaultValue={filters}
      />
      <Select
        id="search-price"
        styles={priceInputStyles}
        onChange={obj => setPrice(obj)}
        options={filterPriceOptions}
        defaultValue={price}
      /> */}
    </SearchContainer>
  )
}

export default Search
