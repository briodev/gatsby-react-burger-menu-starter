module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        {
        resolve: `gatsby-plugin-typography`,
            options: {
            pathToConfigModule: `src/utils/typography`,
            }
        },
        `gatsby-plugin-emotion`
    ],
}