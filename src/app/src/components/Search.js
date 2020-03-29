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
        id="search-date"
      />
      <CheckboxSelect
        id="search-filters"
        placeholder={"filter events by venue, neighborhood, etc."}
        isMulti={true}
        styles={tagInputStyles}
        onChange={obj => setFilters(obj)}
        options={filterOptions}
        defaultValue={filters || [
          { label: "all neighborhoods", value: "all_n" },
          { label: "all venues", value: "all_v" }
        ]}
      />
      <Select
        id="search-price"
        styles={priceInputStyles}
        onChange={obj => setPrice(obj)}
        options={filterPriceOptions}
        defaultValue={price || { value: "all", label: "all prices" }}

      />
    </SearchContainer>
  )
}

export default Search
