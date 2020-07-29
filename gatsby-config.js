require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Kaira Luchi',
    description: 'Kaira Luchi LLC.',
    author: '@alexebube'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kaira Luchi',
        short_name: 'Kaira Luchi',
        description: 'IT and Business Consulting',
        lang: 'en',
        start_url: '/',
        background_color: '#247fe1',
        theme_color: '#247fe1',
        display: 'standalone',
        icon: 'src/images/small-logo.png',
        crossOrigin: 'use-credentials'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: 'image'
      }
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: 'gatsby-cloudinary',
      }
    }
  ]
}
