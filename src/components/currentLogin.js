import React from "react"
import { graphql, StaticQuery } from "gatsby"
import currentLoginStyles from "./currentLogin.module.css"
import BusinessCard from "./businessCard"
import Job from "./job"
import Project from "./project"
import Education from "./education"
import Presentation from "./presentation"
import Footer from "./footer"

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
  
export default () => (
  <StaticQuery
    query={graphql`
      query currentLoginQuery {
        allContentYaml {
          edges {
            node {
              jobs {
                employer
                position
                details
                time
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
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <span >{ currentLoginPrompt }<br />
        Welcome to HenryNeeds.Coffee!</span>
        <br /><br />
        [hquinn@HenryNeeds ~]$ <span className={currentLoginStyles.typed}>&nbsp;whoami<span>&nbsp;</span></span>
        <div className={currentLoginStyles.hiddenPart}>
          <BusinessCard />
          <h3>Work Experience:</h3>
          {data.allContentYaml.edges[0].node.jobs.map((job) => (
            <Job
            employer={job.employer}
            position={job.position}
            time={job.time}
            details={job.details}
          />
          ))}
          <hr />
          <h3>Projects:</h3>
          {data.allContentYaml.edges[0].node.projects.map((project) => (
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
          {data.allContentYaml.edges[0].node.presentations.map((presentation) => (
            <Presentation
              talk={presentation.talk}
              conference={presentation.conference}
              location={presentation.location}
              date={presentation.date}
            />
          ))}
          <Footer />
        </div>
      </div>
    )}
  />
)