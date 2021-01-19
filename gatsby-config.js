module.exports = {
  siteMetadata: {
    author: `Henry Quinn`,
    description: `The personal resume site of Henry Edward Quinn IV`,
    keywords: `Henry, Quinn, DevOps, Engineer, Resume, Docker, Bash, JavaScript, JS, Automation`,
    title: `Henry Needs Coffee`,
    siteUrl: `https://henryneeds.coffee`,
    social: {
      github: "quinncuatro",
      linkedin: "henryquinniv",
      twitter: "quinncuatro",
    }
  },
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-ipfs`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-remark-smartypants`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henry Quinn - Automation Engineer`,
        short_name: `HenryNeedsCoffee`,
        start_url: `/`,
        background_color: `#355366`,
        theme_color: `#355366`,
        display: `standalone`,
        icon: `src/images/icon.png`, 
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://henryneeds.coffee",
        sitemap: "https://henryneeds.coffee/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158941203-1",
        head: false,
        respectDNT: true,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
  ],
}