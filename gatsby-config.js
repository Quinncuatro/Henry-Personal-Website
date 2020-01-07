module.exports = {
  siteMetadata: {
    title: `Henry Needs Coffee`,
    description: `Whatever`,
    author: `Henry Quinn`,
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
  ],
}