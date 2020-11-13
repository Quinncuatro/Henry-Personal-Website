import React from "react"

export default (props) => (
  <div>
    <p><strong>{ props.talk }</strong>
    <br />{ props.conference } - { props.location }
    </p>
    <p>{ props.date }</p>
    <p>
      { props.video && <a href={ props.video }>[ Video ]</a> }
      { props.article && <a href={ props.article }> [ Article ]</a> }
      { props.slides && <a href={ props.slides }> [ Slides ]</a> }
      { props.website && <a href={ props.website }> [ Conf Site ]</a> }
    </p>
    <hr />
  </div>
)