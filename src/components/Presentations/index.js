import React from "react"

export default (props) => (
  <div>
    <p><strong>{ props.talk }</strong>
    <br />{ props.conference } - { props.location }
    </p>
    <p>{ props.date }</p>
    <hr />
  </div>
)