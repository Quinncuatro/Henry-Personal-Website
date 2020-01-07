import React from "react"

export default (props) => (
  <div>
    <p><span><strong>{ props.name }</strong> ({props.year})</span> - {props.description}</p>
    <p><i>{ props.technologies }</i></p>
    <p>[ <a href={props.github} target="_blank" rel="noopener noreferrer">GitHub</a> ] [ <a href={props.dockerhub} target="_blank" rel="noopener noreferrer">Docker Hub</a> ]</p>
    <hr />
  </div>
)