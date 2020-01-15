import React from "react"
import currentLoginStyles from "./currentLogin.module.css"

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
  
export default () => ( 
  <div>
    <span >{ currentLogin }<br />
    Welcome to HenryNeeds.coffee!</span>
    <br /><br />
    [hquinn@HenryNeeds ~]$ <span className={currentLoginStyles.typed}>&nbsp;whoami<span>&nbsp;</span></span>
      <div className={currentLoginStyles.hiddenPart}>
        <h1>Whatever Forever</h1>
      </div>
  </div>
);