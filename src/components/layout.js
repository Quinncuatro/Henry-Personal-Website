import React from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "./layout.module.css"

export default ({ children }) => (
  <div className={layoutStyles.terminalWindow}>
    <Header />
    <section className={layoutStyles.terminal}>
      {children}
    <Footer />
    </section>
  </div>
)