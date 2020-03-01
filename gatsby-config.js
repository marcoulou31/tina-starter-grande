const theme = require("./content/settings/theme.json")
const site = require("./content/settings/site.json")

const path = require("path")
const REPO_ABSOLUTE_PATH = path.join(process.cwd(), "../..")

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-tinacms-json`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
          theme: {
            color: {
              primary: {
                light: theme.color.primary,
                medium: theme.color.primary,
                dark: theme.color.primary,
              },
            },
          },
        },
        plugins: ["gatsby-tinacms-remark", {
          resolve: "gatsby-tinacms-git",
          options: {
            pathToRepo: REPO_ABSOLUTE_PATH,
            defaultCommitMessage: 'Edited with TinaCMS',
            defaultCommitName: 'tina-starter-grande',
            defaultCommitEmail: 'dev@xgestion.com',
            pushOnCommit: true,
            sshKey: "c3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFDQVFEUVo4WWdvV0gzY0dnSlBaSk0yaHkrdTFRN3VSYmNvNlFicDZYRElsVU13WkZyQTNSNEJTajIzV1ZsU3RhYnhUdGxLTGZmellVWVMvbE16ekhSWTRXYnNaTEh2L0lRNXkwZnRyenpwNmtySlFYTmZKWmNDM0RxYzJTcVgwMTBwb3g3WjdiaERiS24wS29kRi9DY2Y4TlpyN29CUlQ5dEp5QmE1V2t5cW5WUi9BSS8ydjRaU0ZIeklxT3E4Vk40TGo1dW02NFJPYkxkQmRTQS9lWEhCYjNPKzg3Z3JZY0NUYkxKV0d6VGM5WFVwV05yT3dIdDJFYkRCenNTYWpIU1NWdWNOOGd0aDMza0JoOVlGeWtucDh4UGpIcWszMUlFeE5meVRSa0ZyVWNCQmlUZ1lROFkwdTNuMWRiWjloMkMzSzRUZGwwRklyY0N5S0RjcTBYb2pCN3pCd3hmUWF5UG4rRXBYNWVud0YvVkttQS9YOGdYL0tCZHRjQjZWZ2JETktzRnhLRlRyQTdra0wxeWZNeGdGNlhxbEpHQkk2d1hVOXhySFhHcEFIS3BSbXIwUi9EUGNzZWpUenArSlAxaXpRemhRdUd3ZUVraU1QOFc4Nk96WUxRSjltUXJNb1NTNy9mT3BIU2FLWDRESE92YlUrSzZhalh1em44Ui85S3FpSndaci9NVnN3MDFRU2kyMkJvazIrMGhPNDQyRHB6dlNDclAyeXpTNkNrYjBjSVI1aWtveDlLaFR4YjFFZytldGZwcHJiRWNsdXpaTVF5TFlLS2QrTGdpVWt1b2MwOUVJTXIzQS9nOWM0czBSam8zc3N4dUZKcmRZYTkrdnZlRWY5Z0E4d3hGZ0ZGaFUrejVkbVJWa0ZZT2pFR0NhZklzd1g2NzFnZ3FiM2c5ZlE9PSBkZXZAeGdlc3Rpb24uY29t"
          },
        },],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/siteLayout.js`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: site.title,
        short_name: site.title,
        start_url: `/`,
        background_color: theme.color.primary,
        theme_color: theme.color.primary,
        display: `minimal-ui`,
        icon: `content/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 880,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:400,700"],
        },
      },
    },
  ],
}
