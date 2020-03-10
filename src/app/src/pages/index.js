import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const IndexPage = () => {


  return(
    <Layout>
    <SEO title="Home" />
    <Search/>
  </Layout>
  )

}

export default IndexPage
