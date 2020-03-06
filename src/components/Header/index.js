import React from "react"
import headerStyles from "./header.module.css"

export default () => (
  <header>
    <div className={headerStyles.redButton}></div>
    <div className={headerStyles.yellowButton}></div>
    <div className={headerStyles.greenButton}></div>
  </header>
)