module.exports = {
  siteMetadata: {
    title: 'Matthieu Harlé - Développeur Fullstack',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Matthieu Harlé - Développeur Fullstack',
        short_name: 'Matthieu Harlé',
        start_url: '/',
        background_color: '#168EE4',
        theme_color: '#168EE4',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
  ],
}
