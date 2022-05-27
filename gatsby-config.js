module.exports = {
    siteMetadata: {
        title: `Sito Prova`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: "twvx1imgz30l",
                accessToken: "wAGXwStYwQxFsRxoxmuITuyXdx12bRTvOzJr_WAPd9g",
            },
            __key: "images"
        }]
};