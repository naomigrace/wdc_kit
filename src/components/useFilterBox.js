import React, { useState } from "react"
import Box from "../styled/Box"
import Label from "../styled/Label"
import InlineLinkSpan from "../styled/InlineLinkSpan"
import HiddenFieldset from "../styled/HiddenFieldset"
import FormAlert from "../styled/FormAlert"
import venues from "../configs/venues"
import neighborhoods from "../configs/neighborhoods"
import ButtonInput from "./ButtonInput"
import ButtonInputBackground from "./ButtonInputBackground"

const useFilterBox = ({ filterState }) => {
  const [justToday, setJustToday] = useState(filterState.justToday)
  const [price, setPrice] = useState(filterState.price)
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState(filterState.neighborhoods)
  const [selectedVenues, setSelectedVenues] = useState(filterState.venues)


  const handlePrice = toggle => {
    setPrice({ ...price, [toggle]: 1 - (price[toggle] | 0) })
  }

  const handleNeighborhoods = toggle => {
    setSelectedNeighborhoods({
      ...selectedNeighborhoods,
      [toggle]: 1 - (selectedNeighborhoods[toggle] | 0),
    })
  }

  const handleVenues = toggle => {
    setSelectedVenues({
      ...selectedVenues,
      [toggle]: 1 - (selectedVenues[toggle] | 0),
    })
  }

  const handleToggleSelectNeighborhoods = () => {
    let toggleNeighborhoods = {...selectedNeighborhoods}
    if(noNeighborhoodSelected){
        Object.keys(toggleNeighborhoods).map(n => toggleNeighborhoods[n] = 1)
    } else {
        Object.keys(toggleNeighborhoods).map(n => toggleNeighborhoods[n] = 0)
    }
    setSelectedNeighborhoods(toggleNeighborhoods)
  }

  const handleToggleSelectVenues = () => {
    let toggleVenues = {...selectedVenues}
    if(noVenueSelected){
        Object.keys(toggleVenues).map(v => toggleVenues[v] = 1)
    } else {
        Object.keys(toggleVenues).map(v => toggleVenues[v] = 0)
    }
    setSelectedVenues(toggleVenues)
  }

  const noPriceSelected = !Object.values(price).includes(1)
  const noNeighborhoodSelected = !Object.values(selectedNeighborhoods).includes(
    1
  )
  const noVenueSelected = !Object.values(selectedVenues).includes(1)

  return {
    justToday,
    price,
    selectedNeighborhoods,
    selectedVenues,
    setJustToday,
    setPrice,
    setSelectedNeighborhoods,
    setSelectedVenues,
    renderFilterBox: () => {
      return (
        <Box radius={"none"}>
          <form>
            <HiddenFieldset>
              <legend className="sr-only">filters</legend>
              <Label id="date-filter" bold>
                date
              </Label>
              <ButtonInput
                labelID={"date-filter"}
                selected={justToday}
                mb={0.5}
                onClick={() => setJustToday(!justToday)}
              >
                just today
              </ButtonInput>
              <ButtonInput
                labelID={"date-filter"}
                selected={!justToday}
                mb={0.5}
                onClick={() => setJustToday(!justToday)}
              >
                today and after
              </ButtonInput>
    
              <Label id="price-filter" bold mt={1.5}>
                price
              </Label>
              <ButtonInput
                labelID={"price-filter"}
                selected={price.free}
                onClick={() => handlePrice("free")}
                mb={0.5}
                color={`secondary_orange_wod`}
              >
                free
              </ButtonInput>
              <ButtonInput
                labelID={"price-filter"}
                selected={price["not free"]}
                onClick={() => handlePrice("not free")}
                mb={0.5}
                color={`secondary_orange_wod`}
              >
                not free
              </ButtonInput>
    
              {noPriceSelected && (
                <FormAlert href="#price-filter" id="price-filter-error">
                  please select a price filter
                </FormAlert>
              )}
    
              <Label id="neighborhoods-filter" bold mt={1.5}>
                neighborhoods{" "}
                <InlineLinkSpan
                  ml={0.5}
                  tabIndex="0"
                  role="link"
                  name="deselect all neighborhoods"
                  onClick={() => handleToggleSelectNeighborhoods()}
                  onKeyPress={event => {
                    event.key === "Enter" ? handleToggleSelectNeighborhoods() : null
                  }}
                >
                  {noNeighborhoodSelected ? `select all?` : `deselect all?`}
                </InlineLinkSpan>
              </Label>
              {Object.keys(neighborhoods).map(neighborhood => (
                <ButtonInputBackground
                  key={neighborhood}
                  image={neighborhood}
                  color={`secondary_peach_wod`}
                  labelID={"neighborhoods-filter"}
                  selected={selectedNeighborhoods[neighborhood] === 1}
                  mb={0.5}
                  onClick={() => handleNeighborhoods(neighborhood)}
                >
                  {neighborhoods[neighborhood]}
                </ButtonInputBackground>
              ))}
    
              {noNeighborhoodSelected && (
                <FormAlert
                  href="#neighborhoods-filter"
                  id="neighborhoods-filter-error"
                >
                  please select a neighborhood filter
                </FormAlert>
              )}
    
              <Label bold mt={1.5} id="venues-filter">
                venues{" "}
                <InlineLinkSpan
                  ml={0.5}
                  tabIndex="0"
                  role="link"
                  name="deselect all venues"
                  onClick={() => handleToggleSelectVenues()}
                >
                  {noVenueSelected ? `select all?` : `deselect all?`}
                </InlineLinkSpan>
              </Label>
              {Object.keys(venues).map(venue => (
                <ButtonInputBackground
                  key={venue}
                  labelID={"venues-filter"}
                  selected={selectedVenues[venue]}
                  image={venue}
                  mb={0.5}
                  onClick={() => handleVenues(venue)}
                >
                  {venues[venue]}
                </ButtonInputBackground>
              ))}
    
              {noVenueSelected && (
                <FormAlert href="#venues-filter" id="venues-filter-error">
                  please select a venue filter
                </FormAlert>
              )}
            </HiddenFieldset>
          </form>
        </Box>
      )
    }
  }

}

export default useFilterBox
