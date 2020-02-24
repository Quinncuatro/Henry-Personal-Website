import React from "react"
import { Link } from "gatsby"

let myEmail = "HenryQuinnIV" + String.fromCharCode(64) + "gmail.com";

export default () => ( <div>
  <div>
    <h1>Henry Quinn IV</h1>
    <h3>DevOps Engineer</h3>
    <a href={ "mailto:"+myEmail }><span>{ myEmail }</span></a> /
    <Link to="/blog/"> Blog</Link> /
    <a href="https://github.com/quinncuatro" target="_blank" rel="noopener noreferrer"> GitHub</a> /
    <a href="https://www.linkedin.com/in/henryquinniv" target="_blank" rel="noopener noreferrer"> LinkedIn</a> /
    <a href="https://docs.google.com/document/d/12AERamrFtIQdnkQcnZG7Bq9R2u3F0T70YYVrRLdr5ek/export?format=pdf" target="_blank" rel="noopener noreferrer"> Printer Friendly Resume</a><br />
    ---------------------------------------------------------------------------<br />
    </div>
  </div>
)