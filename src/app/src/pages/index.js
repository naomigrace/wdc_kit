import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search"
import Map from "../components/Map"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Map />
      <Search />
    </Layout>
  )
}

export default IndexPage
