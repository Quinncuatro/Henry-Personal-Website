import React from "react"

export default (props) => (
  <div>
    <h3>{ props.name }</h3>
    <p>{ props.tech }</p>
    <p><a href={ props.github } target="_blank" rel="noopener noreferrer">[ GitHub ]</a>&nbsp;<a href={ props.twitter } target="_blank" rel="noopener noreferrer">[ Twitter ]</a></p>
    <hr />
  </div>
)