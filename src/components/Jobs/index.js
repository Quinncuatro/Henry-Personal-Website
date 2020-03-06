import React from "react"
import jobStyles from "./job.module.css"

export default (props) => (
  <div>
    <p><strong>{ props.employer }</strong>
    <br />{ props.position }</p>
    <p>{ props.time }</p>
    <p className={jobStyles.jobDetails}>{ props.details }</p>
    <p>
      { props.resource_url_1 && <a href={ props.resource_url_1 }>[ { props.resource_title_1 } ]</a> }
      { props.resource_url_2 && <a href={ props.resource_url_2 }> [ { props.resource_title_2 } ]</a> }
    </p>
    <hr />
  </div>
)


