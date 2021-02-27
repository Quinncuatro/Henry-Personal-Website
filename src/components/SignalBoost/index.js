import React from "react"

export default (props) => (
  <div>
    { !props.hidden && 
      <div>
        <h3>{ props.name }</h3>
        <p>{ props.tech }</p>
        <p>
          { props.blog && <a href={ props.blog } target="_blank" rel="noopener noreferrer">[Blog]</a> }
          { props.devto && <a href={ props.devto } target="_blank" rel="noopener noreferrer"> [DEV]</a> }
          { props.dribbble && <a href={ props.dribbble } target="_blank" rel="noopener noreferrer"> [Dribbble]</a> }
          { props.github && <a href={ props.github } target="_blank" rel="noopener noreferrer"> [GitHub]</a> }
          { props.gitlab && <a href={ props.gitlab } target="_blank" rel="noopener noreferrer"> [GitLab]</a> }
          { props.linkedin && <a href={ props.linkedin } target="_blank" rel="noopener noreferrer"> [LinkedIn]</a> }
          { props.twitter && <a href={ props.twitter } target="_blank" rel="noopener noreferrer"> [Twitter]</a> }
          { props.website && <a href={ props.website } target="_blank" rel="noopener noreferrer"> [Website]</a> }
        </p>
        <hr />
      </div>
    }
  </div>
)