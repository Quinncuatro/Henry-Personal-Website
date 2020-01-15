import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CurrentLogin from "../components/currentLogin"
import BusinessCard from "../components/businessCard"
import Job from "../components/job"
import Project from "../components/project"
import Education from "../components/education"
import Presentation from "../components/presentation"
import Footer from "../components/footer"
import styles from "./index.module.css"

const Resume = ({ data }) => {
  const dataStuff = data.allContentYaml.edges[0].node;
  const jobsData = dataStuff.jobs;
  const projectsData = dataStuff.projects;
  const presentationsData = dataStuff.presentations;
  return (
    <Layout>
    <CurrentLogin />
      <div id="whatever" className={styles.terminalHider}>
        <BusinessCard />
        <h3>Work Experience:</h3>
        {jobsData.map((job) => (
          <Job
          employer={job.employer}
          position={job.position}
          time={job.time}
          details={job.details}
        />
        ))}

        <hr />

        <h3>Projects:</h3>
        {projectsData.map((project) => (
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
        {presentationsData.map((presentation) => (
          <Presentation
            talk={presentation.talk}
            conference={presentation.conference}
            location={presentation.location}
            date={presentation.date}
          />
        ))}
        <Footer />
      </div>
    </Layout>
  );
};

export const resumeQuery = graphql`
  query ResumeQuery {
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
`;

export default Resume; 