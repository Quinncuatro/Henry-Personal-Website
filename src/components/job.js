import React from "react"
import jobStyles from "./job.module.css"

export default (props) => (
  <div>
    <p><strong>{ props.employer }</strong>
    <br />{ props.position }</p>
    <p>{ props.time }</p>
    <p className={jobStyles.jobDetails}>{ props.details }</p>
    <hr />
  </div>
)


