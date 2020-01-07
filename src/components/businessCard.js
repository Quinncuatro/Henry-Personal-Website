import React from "react"

let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function zerosAreHard(n) {
  if (n < 10) {
    n = "0" + n;
  }
  return n;
}

let now = new Date();
let day = days[ now.getDay() ];
let month = months[ now.getMonth() ];
let date = now.getDate();
let hours = zerosAreHard(now.getHours());
let minutes = zerosAreHard(now.getMinutes());
let seconds = zerosAreHard(now.getSeconds());
let year = now.getFullYear();

let currentLogin = "Current login: " + day + " " + month + " " + date + " " + hours +
":" + minutes + ":" + seconds + " " + year;

let myEmail = "HenryQuinnIV" + String.fromCharCode(64) + "gmail.com";

export default () => ( <div>
  <span >{ currentLogin }<br />
  Welcome to HenryNeeds.coffee!</span>
  <br /><br />
  <span>
    [hquinn@HenryNeeds ~]$ <span class="prompt"></span>
    <span class="typed-cursor"></span>&nbsp;
  </span>
  <div class="terminal-data henry-resume hide">
    <h1>Henry Quinn IV</h1>
    <h3>DevOps Engineer</h3>
    <a href={ "mailto:"+myEmail }><span>{ myEmail }</span></a> /
    <a href="http://blog.henryneeds.coffee" target="_blank" rel="noopener noreferrer">Blog</a>
    /
    <a href="https://github.com/quinncuatro" target="_blank" rel="noopener noreferrer">GitHub</a> /
    <a href="https://www.linkedin.com/in/henryquinniv" target="_blank" rel="noopener noreferrer">LinkedIn</a> /
    <a href="https://docs.google.com/document/d/12AERamrFtIQdnkQcnZG7Bq9R2u3F0T70YYVrRLdr5ek/export?format=pdf" target="_blank" rel="noopener noreferrer">Printer Friendly Resume</a><br />
    ---------------------------------------------------------------------------<br />
    </div>
  </div>
)