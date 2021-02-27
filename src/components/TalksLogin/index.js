import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import talksLoginStyles from "./talksLogin.module.css"
import MenuBar from "../MenuBar"
import Presentation from "../Presentations"
import Podcast from "../Podcasts"
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

const TalksLogin = data => {
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
      <p>[hquinn@HenryNeeds ~]$ <span className={talksLoginStyles.typed}>&nbsp;history<span>&nbsp;</span></span></p>
      <div className={hidden ? talksLoginStyles.hiddenPart : ""}>
        <h1>Talks & Podcasts</h1>
        <hr/>
        <p>This is a list of the talks and podcast episodes I've been involved with. I'll do my best to provide links to slides, videos, and other assets when they're available.</p>
        <h2>Conference Talks:</h2>
        {data.allResumeYaml.edges[0].node.presentations.map((presentation) => (
          <Presentation
            talk={presentation.talk}
            conference={presentation.conference}
            location={presentation.location}
            date={presentation.date}
            video={presentation.video}
            website={presentation.website}
            slides={presentation.slides}
            article={presentation.article}
          />
        ))}
        <hr />
        <h2>Podcasts:</h2>
        {data.allResumeYaml.edges[0].node.podcasts.map((podcast) => (
          <Podcast
            title={podcast.title}
            show={podcast.show}
            description={podcast.description}
            date={podcast.date}
            link={podcast.link}
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
      query talksLoginQuery {
        allResumeYaml {
          edges {
            node {
              presentations {
                talk
                conference
                location
                date
                video
                website
                slides
                article
              }
              podcasts {
                title
                show
                date
                description
                link
              }
            }
          }
        }
      }
    `}
    render={TalksLogin}
  />
)