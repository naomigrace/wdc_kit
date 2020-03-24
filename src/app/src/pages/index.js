import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search"
import Map from "../components/Map/index"
import useSearcher from "../hooks/useSearcher"
import Results from "../components/Results"
import cardStackSVG from "../images/cardStack.svg"

const IndexPage = () => {
  const [setConditions, conditions, results] = useSearcher()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
      <Map events={results} />
      <Search setConditions={setConditions} />
      <div id="listButton" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        <img src={cardStackSVG} height={25} width={25} style={{ marginTop: "9px" }}/>
      </div>
      <Results
        events={results}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        clearFilters={() => setConditions("default")}
      />
    </Layout>
  )
}

export default IndexPage
