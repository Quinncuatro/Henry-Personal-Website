import React from "react"
import pageNotFoundLoginStyles from "./pageNotFoundLogin.module.css"
import BusinessCard from "../BusinessCard"
import Footer from "../Footer"

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

let pageNotFoundLoginPrompt = "Current login: " + day + " " + month + " " + date + " " + hours +":" + minutes + ":" + seconds + " " + year;

export default () => (
  <div>
    <span >{ pageNotFoundLoginPrompt }<br />
    Welcome to HenryNeeds.Coffee!</span>
    <br /><br />
    <BusinessCard />
    <br />
    [hquinn@HenryNeeds ~]$ &nbsp;cd /var/www/PageNotFound
    <br /><br />
    <div>
      <div>
        <h3 className={pageNotFoundLoginStyles.noSuchFile}>bash: cd: /var/www/PageNotFound: No such file or directory</h3>
      </div>
      <Footer />
    </div>
  </div>
)
