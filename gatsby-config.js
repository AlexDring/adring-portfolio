const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Alex Dring's Portfolio`,
    siteUrl: `https://www.adring.co.uk`,
    description: `Alex Dring's personal portfolio.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
