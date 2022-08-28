module.exports = {
    siteMetadata: {
        title: `The Veroneser`,
        siteUrl: `https://www.theveroneser.it`
    },
    plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-react-helmet", "gatsby-plugin-transition-link", {
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
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-57ZNKG6",

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: "gatsby" },

                //   // Specify optional GTM environment details.
                //   gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
                //   gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
                //   dataLayerName: "YOUR_DATA_LAYER_NAME",

                // Defaults to https://www.googletagmanager.com
                // selfHostedOrigin: "https://www.theveroneser.it",
            },
        },
    ]
};