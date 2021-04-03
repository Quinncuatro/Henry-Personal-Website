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
          <h3>I do DevOps for <a href="https://clarityssi.com" target="_blank" rel="noopener noreferrer">Clarity SSI</a>, award devs with <a href="https://henrygives.cofee" target="_blank" rel="noopener noreferrer">Henry Gives Coffee</a>, created <a href="https://newhavenreliefresources.com" target="_blank" rel="noopener noreferrer">New Haven Relief Resources</a>, and maintain a <a href="https://techenthusiastscholarship.com" target="_blank" rel="noopener noreferrer">Tech Enthusiast Scholarship</a>.</h3>
          <h3>My friends help me run <a href="https://newhaven.io" target="_blank" rel="noopener noreferrer">NewHaven.IO</a>, coach <a href="https://opensports.net/NewHavenNerdLeague" target="_blank" rel="noreferrer">New Haven Nerd League</a>, and build web projects.</h3>
          <h3>I made an eLearning course called <a href="https://www.udemy.com/course/introduction-to-server-administration/" target="_blank" rel="noopener noreferrer">Intro to Server Administration</a>, and love to help people learn.</h3>
          <h3>Please <Link to="/contact/">hit me up</Link> if you want to collab on something!</h3>
        </div>
        <hr/>
        <div>
          <h1>Here's a selection of my writing:</h1>
          <strong className={homePageStyles.articleName}><Link to="/posts/ipfs-1-decentralized-web-is-here/">IPFS-The Decentralized Web Is Finally Here</Link></strong>
          <h5>Category: Decentralized Web, IPFS || Date: January 27th, 2021</h5>
          <p>It's the spring of 2011. I've already been accepted to college. Senioritis is setting in and 3OH!3 is blaring on my headphones as I sit at my desk at 2 AM on a school night... Homework long since done, I'm staring at the screen of the heavily used 17" Gateway laptop I managed to…</p>
          <strong className={homePageStyles.articleName}><Link to="/posts/day3-fun-with-flags/">Learning DevOps In Public (Day 3) - Fun With Flags</Link></strong>
          <h5>Category: DevOps || Date: July 4th, 2019</h5>
          <p>First off, some housekeeping. I can already tell that coming up with a daily post is going to be harder than my buddy Alex had with his SVG work. He had one animation to complete every day. I'm spending all month working towards one larger goal. However, I'll do my best to share…</p>
        </div>
        <hr/>
        <div>
          <h1>And here are some things I've built:</h1>
          <p><strong className={homePageStyles.projectName}><a href="https://github.com/Quinncuatro/service-relief-new-haven" target="_blank" rel="noopener noreferrer">New Haven Relief Resources</a></strong> (2020) - Built a web app to crowdsource and relay information regarding available aid in New Haven during the COVID-19 pandemic (including food banks, health/family resources, and business help). Includes a sister repository to help others set up a no-code version for their own city using only free resources.</p>
          <p><i>JavaScript, React, GatsbyJS, AirTable, Netlify.</i></p>
          <p><a href="https://newhavenreliefresources.com" target="_blank" rel="noopener noreferrer">[ Website ]</a>
          </p>
          <p><strong className={homePageStyles.projectName}><a href="https://github.com/Quinncuatro/SLAter" target="_blank" rel="noopener noreferrer">SLAter</a></strong> (2018) - Programmed a Raspberry Pi to monitor my DeskPro queue and alert me via external speakers when I have a new ticket assigned to me. This workflow was also used to remind a coworker to drink water and cure his gout.</p>
          <p><i>JavaScript, Node, MySQL, Raspberry Pi.</i></p>
        </div>
        <hr/>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;