import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import digitalGardenLoginStyles from "./digitalGardenLogin.module.css"
import MenuBar from "../MenuBar"
import PostListing from "../PostsGarden"
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

const DigitalGarden = data => {
  const [hidden, setHidden] = useState(true);
  const [categoryState, setCategory] = useState({
    category: 'Decentralized Web'
  })
  useEffect(() => {
    setTimeout(() => setHidden(false), 2400)
  }, [])

  return (
    <div>
      <span >{ currentLoginPrompt }<br />
      Welcome to HenryNeeds.Coffee!</span>
      <br /><br />
      <MenuBar />
      <p>[hquinn@HenryNeeds ~]$ <span className={digitalGardenLoginStyles.typed}>&nbsp;./digital-garden.sh<span>&nbsp;</span></span></p>
      <div className={hidden ? digitalGardenLoginStyles.hiddenPart : ""}>
        <h1>Digital Garden</h1>
        <p>"An online space at the intersection of a notebook and a blog, where digital gardeners share seeds of thoughts to be cultivated in public." - <a href="https://nesslabs.com/digital-garden-set-up">Anne-Laure Le Cunff</a></p>
        <hr />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostListing key={node.id} post={node} />
        ))}
        <Footer />
      </div>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query digitalGardenQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { type: { eq: "garden" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                category
                date(formatString: "MMMM Do, YYYY")
                desc
                title
              }
              html
              excerpt(pruneLength: 280)
            }
          }
        }
      }
    `}
    render={DigitalGarden}
  />
)