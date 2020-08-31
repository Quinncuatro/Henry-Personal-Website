import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import currentLoginStyles from "./currentLogin.module.css"
import BusinessCard from "../BusinessCard"
import Job from "../Jobs"
import Project from "../Projects"
import Education from "../Education"
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

const CurrentLogin = data => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <span >{ currentLoginPrompt }<br />
      Welcome to HenryNeeds.Coffee!</span>
      <br /><br />
      [hquinn@HenryNeeds ~]$ <span className={currentLoginStyles.typed}>&nbsp;whoami<span>&nbsp;</span></span>
      <div className={hidden ? currentLoginStyles.hiddenPart : ""}>
        <BusinessCard />
        <h3>Work Experience:</h3>
        {data.allResumeYaml.edges[0].node.jobs.map((job) => (
          <Job
          employer={job.employer}
          position={job.position}
          time={job.time}
          details={job.details}
          resource_url_1={job.resource_url_1}
          resource_title_1={job.resource_title_1}
          resource_url_2={job.resource_url_2}
          resource_title_2={job.resource_title_2}
        />
        ))}
        <hr />
        <h3>Projects:</h3>
        {data.allResumeYaml.edges[0].node.projects.map((project) => (
          <Project
            name={project.name}
            year={project.year}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            dockerhub={project.dockerhub}
          />
        ))}
        <hr />
        <h3>Education:</h3>
        <Education />
        <hr />
        <h3>National Presentations:</h3>
        {data.allResumeYaml.edges[0].node.presentations.map((presentation) => (
          <Presentation
            talk={presentation.talk}
            conference={presentation.conference}
            location={presentation.location}
            date={presentation.date}
            video={presentation.video}
            website={presentation.website}
            slides={presentation.slides}
          />
        ))}
        <hr />
        <h3>Podcasts:</h3>
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
      query currentLoginQuery {
        allResumeYaml {
          edges {
            node {
              jobs {
                employer
                position
                details
                time
                resource_url_1
                resource_title_1
                resource_url_2
                resource_title_2
              }
              projects {
                name
                year
                description
                technologies
                github
                dockerhub
              }
              presentations {
                talk
                conference
                location
                date
                video
                website
                slides
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
    render={CurrentLogin}
  />
)