import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import signalBoostLoginStyles from "./signalBoostLogin.module.css"
import MenuBar from "../MenuBar"
import SignalBoost from "../SignalBoost"
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

const SignalBoostPage = data => {
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
      <p>[hquinn@HenryNeeds ~]$ <span className={signalBoostLoginStyles.typed}>&nbsp;useradd<span>&nbsp;</span></span></p>
      <div className={hidden ? signalBoostLoginStyles.hiddenPart : ""}>
        <h1>Signal Boosts</h1>
        <hr/>
        <p>These amazing folks are currently looking for a job. If you or your orgs are hiring for roles with these skills, please feel free to reach out to them.</p>
        <p>To add yourself to this list, fork <a href="https://github.com/Quinncuatro/Henry-Personal-Website" target="_blank" rel="noopener noreferrer">this website's source code</a> and submit a pull request with of edits to <a href="https://github.com/Quinncuatro/Henry-Personal-Website/blob/master/src/signalboost/" target="_blank" rel="noopener noreferrer">this page</a>.</p>
        <p>With COVID-19 continuing to rage across the world, these people are in need of a job now more than ever.</p>
        <hr/><hr/>
        <h2>People</h2>
        <hr/>
        {data.allSignalboostYaml.edges[0].node.people.map((person) => (
          <SignalBoost
            name={person.name}
            tech={person.tech}
            github={person.github}
            twitter={person.twitter}
          />
        ))}
        <Footer />
      </div>
    </div>
  )
}
  
export default () => (
  <StaticQuery
    query={graphql`
      query signalBoostQuery {
        allSignalboostYaml {
          edges {
            node {
              people {
                name
                tech
                github
                twitter
              }
            }
          }
        }
      }
    `}
    render={SignalBoostPage}
  />
)