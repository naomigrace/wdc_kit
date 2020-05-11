import React from "react"
import Layout from "../components/Layout"
import { MainBody_HomePage } from "./Main"

export default ({ children }) => (
  <Layout>
    <MainBody_HomePage>{children}</MainBody_HomePage>
  </Layout>
)
