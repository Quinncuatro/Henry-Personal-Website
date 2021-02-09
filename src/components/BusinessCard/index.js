import React from "react"
import { Link } from "gatsby"

export default () => ( <div>
  <div>
    --------------------------------------------------
    <br />
    <Link to="/">[ Home ]</Link>&nbsp;
    <Link to="/blog/">[ Blog ]</Link>&nbsp;
    <Link to="/contact/">[ Contact ]</Link>&nbsp;
    <Link to="/resume/">[ Resume ]</Link>&nbsp;
    <Link to="/talks/">[ Talks ]</Link>
    <br />
    --------------------------------------------------<br />
    </div>
  </div>
)