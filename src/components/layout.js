import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import layoutStyles from "./layout.module.css"

export default ({ children }) => (
  <div className={layoutStyles.terminalWindow}>
    <Helmet>
      <title>Henry Needs Coffee</title>
      <meta name="description" content="The resume site for Henry Edward Quinn IV" />
      <html lang="en" />
    </Helmet>
    <Header />
    <section className={layoutStyles.terminal}>
      {children}
    </section>
  </div>
)