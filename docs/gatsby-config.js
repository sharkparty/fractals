module.exports = {
  siteMetadata: {
    title: 'Fractals',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'fractals',
        short_name: 'fractals',
        start_url: '/',
        background_color: '#282A2B',
        theme_color: '#282A2B',
        // display: 'minimal-ui',
        icon: 'src/images/fractals-icon.png'
      },
    },
    'gatsby-plugin-offline',
  ],
}
