import React from "react"
import Layout from "../components/layout"
import BusinessCard from "../components/businessCard"
import Job from "../components/job"
import Project from "../components/project"
import Education from "../components/education"
import Presentation from "../components/presentation"
import styles from "./index.module.css"

export default () => 
<Layout>
  <BusinessCard />
  <h3>Work Experience:</h3>
  <Job employer="Clarity Software Solutions" position="DevOps Engineer" time="May 2019 - Present" details="The new phone book’s here… I’m a somebody now." />
  <Job employer="Administrative Office (AO) of the United States Courts" position="Software Developer - Temporary Duty Assignment" time="August 2019 - April 2019" details="The new phone book’s here… I’m a somebody now." />
  <Job employer="United States District Court, District of Connecticut" position="Programmer" time="March 2017 - April 2019" details="The new phone book’s here… I’m a somebody now." />
  <Job employer="United States District Court, District of Connecticut" position="Programmer / Analyst" time="May 2015 - March 2017" details="The new phone book’s here… I’m a somebody now." />
  <Job employer="NewHaven.io (Non-Profit)" position="Member Board of Directors" time="November 2018 - Present" details="The new phone book’s here… I’m a somebody now." />

  <hr />

  <h3>Projects:</h3>
  <Project name="DEVC Webpack" year="2018" description="Experimenting folding Vue.js, Node, and WebPack into a containerized Lucee (open source ColdFusion) and MySQL environment that’s used in the judiciary. The end goal is to spur a modernization effort of our tech stacks across the country." technologies="Vue.js, ColdFusion, Shell, JavaScript, Docker, Node, Webpack, MySQL." github="https://github.com/Quinncuatro/DEVC_Webpack_Playground" dockerhub="whatever" />
  <Project name="SLAter " year="2018" description="Programmed a Raspberry Pi to monitor my DeskPro queue and alert me via external speakers when I have a new ticket assigned to me. This workflow was also used to remind a coworker to drink water and cure his gout." technologies="JavaScript, Node, MySQL, Raspberry Pi." github="https://github.com/Quinncuatro/SLAter" dockerhub="whatever" />
  <Project name="US Webtranet" year="2017" description="Built a containerized intranet framework for federal agencies. It was presented and used as a Docker technical demo in a nationwide video conference call to other judiciary developers in January of 2017." technologies="Ruby, Rails, SQLite, Draft U.S. Web Design Standards, Docker." github="https://github.com/Quinncuatro/us_webtranet" dockerhub="https://hub.docker.com/r/quinncuatro/us_webtranet/" />
  <Project name="Digital Signage" year="2017" description="Developed a responsive digital signage system to let competitors in the 2017 National High School Mock Trials Championship know their various courtroom assignments across the Hartford courthouse when new rounds were posted." technologies="JavaScript, Meteor, MongoDB." github="https://github.com/Quinncuatro/signage" dockerhub="whatever" />


  <hr />

  <h3>Education:</h3>
  <Education />

  <hr />

  <h3>National Presentations:</h3>
  <Presentation talk="Leading a Digital Transformation at the Speed of Government" conference="Google Developers Group DevFest" location="New Haven, CT" date="September, 2019" />
  <Presentation talk="Leading a Digital Transformation at the Speed of Government" conference="DevOpsDays Hartford" location="Hartford, CT" date="October 2019" />


  <Presentation talk="Judicial Dashboard - Dashboard View of Court Operations" conference="U.S. District Courts, IT Conference West" location="Phoenix, AZ" date="August 2018" />
  <Presentation talk="Judicial Dashboard - Dashboard View of Court Operations" conference="U.S. District Courts, District Operational Practices Forum" location="Minneapolis, MN" date="May 2018" />
  <Presentation talk="Intro to DevOps Workshop" conference="Google Developers Group DevFest" location="New Haven, CT" date="November 2017" />
  <Presentation talk="US Webtranet" conference="U.S. District Courts, Collaborative Applications Development (CAD) Developer’s Forum" location="Webex" date="January 2017" />
  <Presentation talk="Human Resources Organizer (HRO)" conference="U.S. District Courts, District Operational Practices Forum" location="Orlando, FL" date="September 2016" />
</Layout>