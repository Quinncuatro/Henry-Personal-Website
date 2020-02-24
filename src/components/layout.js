import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import "prismjs/themes/prism-twilight.css"
import layoutStyles from "./layout.module.css"

export default ({ children }) => (
  <div className={layoutStyles.terminalWindow}>
    <Helmet>
      <meta name="description" content="The personal resume site for Henry Edward Quinn IV" />
      <meta name="keywords" content="Henry, Quinn, DevOps, Engineer, Resume, Docker, Bash, GoLang, Go, JavaScript, JS, Automation" />
      <meta charset="UTF-8" />
      <html lang="en" />
      <title>Henry Quinn - Automation Engineer</title>
    </Helmet>
    <Header />
    <section className={layoutStyles.terminal}>
      {children}
    </section>
  </div>
)
