import React from "react"

export default (props) => (
  <div>
    <p><strong>{ props.employer }</strong>
    <br />{ props.position }</p>
    <p>{ props.time }</p>
    <p>{ props.details }</p>
    <hr />
  </div>
)


