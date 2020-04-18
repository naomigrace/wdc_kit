import React, { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search"
import Map from "../components/Map/index"
import { FlyToInterpolator } from "react-map-gl"
import useSearcher from "../hooks/useSearcher"
import Results from "../components/Results"
import FilterButton from "../ui/FilterButton"
import SidebarStyle from "../ui/SidebarStyle"
import iconFilterSVG from "../images/icon_filter.svg"

const dateTimeNow = new Date().toISOString()

const IndexPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" })

  const [
    setConditions,
    conditions,
    results,
  ] = useSearcher(
    [
      { date: dateTimeNow },
      {
        filters: [
          { t: "n", label: "all neighborhoods", value: "all_n" },
          { t: "v", label: "all venues", value: "all_v" },
        ],
      },
      { price: { label: "all", value: "all" } },
    ],
    isTabletOrMobile
  )

  const [date, setDate] = useState(dateTimeNow)
  const [justToday, setJustToday] = useState(false)
  const [filters, setFilters] = useState()
  const [price, setPrice] = useState({ label: "all", value: "all" })
  const [isFiltersOpen, setIsFiltersOpen] = useState(true)
  const [viewport, setViewport] = useState({
    latitude: 38.8943,
    longitude: -77.0276,
    zoom: 12.5,
    bearing: 0,
    pitch: 0,
    minZoom: 11,
    maxZoom: 20,
  })

  const [selectedEvent, setSelectedEvent] = useState()

  const clearFilters = () => {
    setSelectedEvent(null)
    setJustToday(false)
    setPrice({ label: "all", value: "all" })
  }

  // change viewport when user clicks on card
  useEffect(() => {
    if (selectedEvent) {
      let newViewport = {
        latitude: selectedEvent.latitude,
        longitude: selectedEvent.longitude,
        transitionDuration: 600,
        zoom: 14,
        transitionInterpolator: new FlyToInterpolator(),
      }
      setViewport({ ...viewport, ...newViewport })
    }
  }, [selectedEvent, viewport])

  useEffect(() => {
    let newConditions = []
    if (date) {
      newConditions.push({ date: date, justToday: justToday })
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
  }, [date, justToday, filters, price, setConditions])

  return (
    <Layout
    >
      <SEO title="Home" />
      <SidebarStyle>
      <Results
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          events={results}
          clearFilters={() => clearFilters()}
        >
          {isFiltersOpen && (
            <Search
              isMobile={isTabletOrMobile}
              setDate={setDate}
              setFilters={setFilters}
              setPrice={setPrice}
              setJustToday={setJustToday}
              justToday={justToday}
              date={date}
              filters={filters}
              price={price}
              clearFilters={clearFilters}
              filtersSet={justToday || price.value !== "all"}
            />
          )}
        </Results>
      </SidebarStyle>
      <Map
        viewport={viewport}
        setViewport={setViewport}
        events={results}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
        isTabletOrMobile={isTabletOrMobile}
      />

      <FilterButton onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
        <img
          src={iconFilterSVG}
          height={30}
          width={30}
          alt={"filter results button"}
        />
        <span>filter results</span>
      </FilterButton>
    </Layout>
  )
}

export default IndexPage
