import React, { useState, useEffect } from "react"
import contactLoginStyles from "./contactLogin.module.css"
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

let myEmail = "HenryQuinnIV" + String.fromCharCode(64) + "gmail.com";

const ContactPage = () => {
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
      <p>[hquinn@HenryNeeds ~]$ <span className={contactLoginStyles.typed}>&nbsp;sendmail<span>&nbsp;</span></span></p>
      <div className={hidden ? contactLoginStyles.hiddenPart : ""}>
        <h1>Contact</h1>
        <hr/>
        <h2>Email</h2>
        <a href={ "mailto:"+myEmail }> [ Email Me ]</a>
        <h2>Social Media</h2>
        <a href="https://github.com/quinncuatro" target="_blank" rel="noopener noreferrer">[ GitHub ]</a>&nbsp;<a href="https://ko-fi.com/henryquinn" target="_blank" rel="noopener noreferrer">[ Ko-fi ]</a>&nbsp;
        <a href="https://www.linkedin.com/in/henryquinniv" target="_blank" rel="noopener noreferrer">[ LinkedIn ]</a>&nbsp;
        <a href="https://www.twitter.com/quinncuatro" target="_blank" rel="noopener noreferrer">[ Twitter ]</a>
        <h2>Chat Apps</h2>
        <a href="https://discordapp.com/users/Quinncuatro#0653" target="_blank" rel="noopener noreferrer">[ Discord ]</a>&nbsp;
        <a href="https://t.me/quinncuatro" target="_blank" rel="noopener noreferrer">[ Telegram ]</a>
        <h2>Other Information</h2>
        <p>I'm super open to being contacted for speaking at conferences, on panels, or as a guest on a podcast! I just ask that your organization be one that provides equal opportunities to members of the BIPOC and LGBTQIA+ communities.</p>
        <br /><br />
        <p>Also please reach out if you'd like to collaborate on something!</p>
        <br/><br/>
        <p>I've always wanted to:</p>
        <ul>
          <li>Write a guest blog post</li>
          <li>Have a guest write for my blog</li>
          <li>Help write a book</li>
          <li>Help organize a tech conference in New Haven</li>
          <li>Help write a book</li>
        </ul>
        <hr />
        <Footer />
      </div>
    </div>
  )
}

export default ContactPage;
