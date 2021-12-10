require("dotenv").config({
  path: ".env",
});

module.exports = {
  plugins: [
    `gatsby-plugin-client-side-redirect`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        rehypePlugins: [
          require("rehype-slug"),
          [
            require("rehype-toc"),
            {
              headings: ["h2", "h3"],
              cssClasses: {
                toc: "table-of-contents",
              },
            },
          ],
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: `komponenter`,
        path: `${__dirname}/../packages`,
        ignore: [
          `**/*.usage.mdx`,
          `**/*.js`,
          `**/*.jsx`,
          `**/*.tsx`,
          `**/*.ts`,
          `**/lib/**`,
          `**/src/**`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docgen`,
        path: `${__dirname}/../packages`,
        ignore: [
          `**/*.js`,
          `**/stories/**`,
          `**/*eksempel.js`,
          `**/sample/*.js`,
          `**/*.example.js`,
          `**/*.mdx`,
          `**/*.d.*`,
          `**/lib/**`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.tsx`),
      },
    },
    {
      resolve: `from-git-fix`,
      options: {
        repository: "verktoykasse-innhold",
        tree: true,
        releases: false,
        user: "navikt",
        branch: process.env.BRANCH,
        secrets: {
          token: process.env.ACCESS_TOKEN,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NAV Designsystem`,
        short_name: `NAV DS`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        icon: `src/components/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-plugin-hotjar-tracking`,
      options: {
        includeInDevelopment: false,
        id: 148751,
        sv: 6,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
