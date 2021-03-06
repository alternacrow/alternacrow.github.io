/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config();
const path = require('path');

const siteMetadata = {
  title: 'alternacrow',
  author: 'alternacrow',
  shortName: 'alternacrow',
  siteLanguage: 'ja',
  user: {
    name: 'alternacrow',
    github: 'alternacrow',
    twitter: 'alternacrow',
  },
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: process.env.GITHUB_API_TOKEN,
        graphQLQuery: `
          query {
            user(login: "${siteMetadata.user.github}") {
              login
              bio
              avatarUrl(size: 32)
              email
              twitterUsername
              url
              gists(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
                nodes {
                  id
                  url
                  updatedAt
                  createdAt
                  description
                  name
                }
              }
              repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
                nodes {
                  id
                  name
                  url
                  homepageUrl
                  description
                }
              }
            }
          }
        `,
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'src/types/graphql-types.d.ts',
        codegenConfig: { maybeValue: 'T | undefined' },
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
