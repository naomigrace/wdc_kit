import React from "react"
import FilterInput from "../ui/FilterInput"
import SearchContainer from "../ui/SearchStyles"

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
  clearFilters,
  filtersSet,
}) => {

  const handlePriceClick = () => {
    if(price.value === "all"){
      setPrice({ label: "free", value: 0 })
    } else {
      setPrice({ label: "all", value: "all"})
    }
  }

  const handleDateClick = () => {
    setJustToday(!justToday)
  }

    return (
    <SearchContainer id="wdc-search-container" isMobile={isMobile}>
      <FilterInput active={justToday} onClick={() => handleDateClick()}>{justToday ? "today only" : "today and after"}</FilterInput>
      <FilterInput>neighborhoods</FilterInput>
      <FilterInput>venues</FilterInput>
      <FilterInput active={price.label === "free"} onClick={() => handlePriceClick()}>price ({price.label})</FilterInput>
      <FilterInput inVisible={!filtersSet} disabled={!filtersSet} clear={true} onClick={() => clearFilters()}>reset filters</FilterInput>
    </SearchContainer>
  )
}

export default Search
