module.exports = {
  siteMetadata: {
    siteUrl: 'https://matthieuharle.com',
    title: 'Matthieu Harlé',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pokescan',
        path: `${__dirname}/src/images/pokescan`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'bad',
        path: `${__dirname}/src/images/bad`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'alienor',
        path: `${__dirname}/src/images/alienor`,
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
  ],
}
