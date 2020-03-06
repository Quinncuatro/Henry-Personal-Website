import React from "react"

export default (props) => (
  <div>
    <p><strong>{ props.name }</strong> ({props.year}) - {props.description}</p>
    <p><i>{ props.technologies }</i></p>
    <p><a href={props.github} target="_blank" rel="noopener noreferrer">[ GitHub ]</a>
    </p>
    <hr />
  </div>
)