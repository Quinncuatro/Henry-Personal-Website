module.exports = {
  siteMetadata: {
    author: `Henry Quinn`,
    description: `The personal resume site of Henry Edward Quinn IV`,
    keywords: `Henry, Quinn, DevOps, Engineer, Resume, Docker, Bash, JavaScript, JS, Automation`,
    title: `Henry Needs Coffee`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henry Needs Coffee`,
        short_name: `HenryNeedsCoffee`,
        start_url: `/`,
        background_color: `#355366`,
        theme_color: `#355366`,
        display: `standalone`,
        icon: `src/images/icon.png`, 
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}