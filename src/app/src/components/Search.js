import React from "react"
import { DateTimePicker } from "@atlaskit/datetime-picker"
import Select, { CheckboxSelect } from "@atlaskit/select"
import filterOptions from "../data/filterOptions"
import filterPriceOptions from "../data/filterPriceOptions"

import SearchContainer, {
  dateTimeStyles,
  tagInputStyles,
  priceInputStyles,
} from "../ui/SearchStyles"

const Search = ({
  isDrawerOpen,
  dateTimeNow,
  setDate,
  setFilters,
  setPrice,
  date,
  filters,
  price,
}) => {
  return (
    <SearchContainer isMobile={isDrawerOpen}>
      <DateTimePicker
        innerProps={dateTimeStyles}
        onChange={value => setDate(value)}
        value={date}
        defaultValue={dateTimeNow}
        id="search-date"
      />
      <CheckboxSelect
        id="search-filters"
        placeholder={"filter events by venue, neighborhood, etc."}
        isMulti={true}
        styles={tagInputStyles}
        onChange={obj => setFilters(obj)}
        value={filters || null}
        options={filterOptions}
      />
      <Select
        id="search-price"
        styles={priceInputStyles}
        onChange={obj => setPrice(obj.value)}
        options={filterPriceOptions}
        value={price || null}
        defaultValue={{ value: "all", label: "all prices" }}
      />
    </SearchContainer>
  )
}

export default Search
