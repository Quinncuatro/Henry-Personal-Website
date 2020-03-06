import React from "react"

export default (props) => (
  <div>
    <p><strong>{ props.talk }</strong>
    <br />{ props.conference } - { props.location }
    </p>
    <p>{ props.date }</p>
    <p>
      { props.video && <a href={ props.video }>[ Video ]</a> }
      { props.website && <a href={ props.website }> [ Website ]</a> }
    </p>
    <hr />
  </div>
)