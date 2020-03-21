import filterVenueOptions from "./filterVenueOptions"
import filterNeighborhoodOptions from "./filterNeighborhoodOptions"

export default [
  {
    label: "neighborhoods",
    options: filterNeighborhoodOptions,
  },
  {
    label: "venues",
    options: filterVenueOptions,
  },
]
