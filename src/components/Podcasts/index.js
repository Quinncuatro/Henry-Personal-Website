import React from "react"

export default (props) => (
  <div>
    <p><strong>{ props.show }</strong> - {props.title} ({props.date}) </p>
    <p><i>{ props.description }</i></p>
    <p><a href={props.link} target="_blank" rel="noopener noreferrer">[ Podcast Link ]</a>
    </p>
    <hr />
  </div>
)