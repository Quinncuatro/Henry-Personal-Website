import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import homePageStyles from "./homePage.module.css"
import MenuBar from "../MenuBar"
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

let currentLoginPrompt = "Current login: " + day + " " + month + " " + date + " " + hours +":" + minutes + ":" + seconds + " " + year;

const HomePage = () => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <span >{ currentLoginPrompt }<br />
      Welcome to HenryNeeds.Coffee!</span>
      <br /><br />
      <MenuBar />
      <p>[hquinn@HenryNeeds ~]$ <span className={homePageStyles.typed}>&nbsp;whoami<span>&nbsp;</span></span></p>
      <div className={hidden ? homePageStyles.hiddenPart : ""}>
        <div>
          <h1>Hi, my name is Henry!</h1>
          <h3>I do DevOps for <a href="https://clarityssi.com" target="_blank" rel="noopener noreferrer">Clarity SSI</a>, award devs with <a href="https://henrygives.coffee" target="_blank" rel="noopener noreferrer">Henry Gives Coffee</a>, created <a href="https://newhavenreliefresources.com" target="_blank" rel="noopener noreferrer">New Haven Relief Resources</a>, and maintain a <a href="https://techenthusiastscholarship.com" target="_blank" rel="noopener noreferrer">Tech Enthusiast Scholarship</a>.</h3>
          <h3>My friends help me run <a href="https://newhaven.io" target="_blank" rel="noopener noreferrer">NewHaven.IO</a>, coach <a href="https://opensports.net/NewHavenNerdLeague" target="_blank" rel="noreferrer">New Haven Nerd League</a>, and build web projects.</h3>
          <h3>I made an eLearning course called <a href="https://www.udemy.com/course/introduction-to-server-administration/" target="_blank" rel="noopener noreferrer">Intro to Server Administration</a>, and love to help people learn.</h3>
          <h3>Please <Link to="/contact/">hit me up</Link> if you want to collab on something!</h3>
        </div>
        <hr/>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;