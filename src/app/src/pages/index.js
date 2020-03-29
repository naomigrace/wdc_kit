import React, { useState, useEffect } from "react"
import { ToggleStateless } from "@atlaskit/toggle"
import { useMediaQuery } from "react-responsive"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search"
import Map from "../components/Map/index"
import useSearcher from "../hooks/useSearcher"
import Results from "../components/Results"
import cardStackSVG from "../images/cardStack.svg"

const dateTimeNow = new Date().toISOString()

const IndexPage = () => {
  const [setConditions, conditions, results] = useSearcher([
    { date: dateTimeNow },
    {
      filters: [
        { t: "n", label: "all neighborhoods", value: "all_n" },
        { t: "v", label: "all venues", value: "all_v" },
      ],
    },
    { price: { label: "all prices", value: "all" } },
  ])
  const [date, setDate] = useState(dateTimeNow)
  const [justToday, setJustToday] = useState(false)
  const [filters, setFilters] = useState()
  const [price, setPrice] = useState("all")
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" })

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
    <Layout>
      <SEO title="Home" />
      <Map events={results} />
      {!isTabletOrMobile && (
        <Search
          setDate={setDate}
          setFilters={setFilters}
          setPrice={setPrice}
          date={date}
          filters={filters}
          price={price}
        />
      )}
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
        {isDrawerOpen && isTabletOrMobile && (
          <Search
            isDrawerOpen={isDrawerOpen}
            setDate={setDate}
            setFilters={setFilters}
            setPrice={setPrice}
            date={date}
            filters={filters}
            price={price}
          />
        )}
        <div
          style={{
            textAlign: "right",
            paddingRight: "20px",
          }}
          onClick={() => setJustToday(!justToday)}
        >
          <p>
            <small>Today's events only</small>
          </p>
          <ToggleStateless
            isChecked={justToday}
            size="large"
            label="Show events for just today"
          />
        </div>
      </Results>
    </Layout>
  )
}

export default IndexPage
