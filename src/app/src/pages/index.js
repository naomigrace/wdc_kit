import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search"
import Map from "../components/Map"
import useSearcher from "../hooks/useSearcher"
import Results from "../components/Results"
import ListIcon from '@atlaskit/icon/glyph/list';

const IndexPage = () => {

  const [setConditions, conditions, results] = useSearcher()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  console.log(conditions)
  console.log(results)

  return (
    <Layout>
      <SEO title="Home" />
      <Map events={results}/>
      <Search setConditions={setConditions}/>
      <div id="listButton" onClick={() => setIsDrawerOpen(!isDrawerOpen)}><ListIcon size={"medium"}/></div>
      <Results events={results} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
    </Layout>
  )
}

export default IndexPage
