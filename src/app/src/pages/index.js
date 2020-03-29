import React, { useState, useEffect } from "react"
import { useMediaQuery } from 'react-responsive'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search"
import Map from "../components/Map/index"
import useSearcher from "../hooks/useSearcher"
import Results from "../components/Results"
import cardStackSVG from "../images/cardStack.svg"

const dateTimeNow = new Date().toISOString()

const IndexPage = () => {
  const [setConditions, conditions, results] = useSearcher()
  const [date, setDate] = useState(dateTimeNow)
  const [filters, setFilters] = useState()
  const [price, setPrice] = useState("all")
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useEffect(() => {
    setDate(dateTimeNow)
  }, [])

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
      console.log(newConditions)
    }
  }, [date, filters, price, setConditions])

  return (
    <Layout>
      <SEO title="Home" />
      <Map events={results} />
      {!isTabletOrMobile && <Search
        setDate={setDate}
        setFilters={setFilters}
        setPrice={setPrice}
        date={date}
        filters={filters}
        price={price}

      />}
      <div id="listButton" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        <img
          src={cardStackSVG}
          height={25}
          width={25}
          style={{ marginTop: "9px" }}
        />
      </div>
      <Results
        events={results}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        clearFilters={() => setConditions("default")}
      >
        {isDrawerOpen && isTabletOrMobile && <Search
          isDrawerOpen={isDrawerOpen}
          setDate={setDate}
          setFilters={setFilters}
          setPrice={setPrice}
          date={date}
          filters={filters}
          price={price}
        />}
      </Results>
    </Layout>
  )
}

export default IndexPage
