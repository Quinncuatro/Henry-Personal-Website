import React from "react"
import { Link } from "gatsby"

let myEmail = "HenryQuinnIV" + String.fromCharCode(64) + "gmail.com";

export default () => ( <div>
  <div>
    ------------------------------------------------<br />
    <Link to="/"> [ Home ]</Link>
    <Link to="/blog/"> [ Blog ]</Link>
    <Link to="/resume/"> [ Resume ]</Link>
    <Link to="/talks/"> [ Talks ]</Link><br /><br />
    <a href={ "mailto:"+myEmail }> [ Email Me ]</a>
    <a href="https://github.com/quinncuatro" target="_blank" rel="noopener noreferrer"> [ GitHub ]</a>
    <a href="https://www.linkedin.com/in/henryquinniv" target="_blank" rel="noopener noreferrer"> [ LinkedIn ]</a>
    <a href="https://www.twitter.com/quinncuatro" target="_blank" rel="noopener noreferrer"> [ Twitter ]</a><br />
    ------------------------------------------------<br />
    </div>
  </div>
)