module.exports = {
    siteMetadata: {
        title: `The Veroneser`,
        description: `A fictional cover project inspired by the city of Verona seen through the eyes of different artists`,
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
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-YD6WX70FQF", // Google Analytics / GA
                ],
                //   // This object gets passed directly to the gtag config command
                //   // This config will be shared across all trackingIds
                //   gtagConfig: {
                //     optimize_id: "OPT_CONTAINER_ID",
                //     anonymize_ip: true,
                //     cookie_expires: 0,
                //   },
                // This object is used for configuration specific to this plugin
                //   pluginConfig: {
                //     // Puts tracking script in the head instead of the body
                //     head: false,
                //     // Setting this parameter is also optional
                //     respectDNT: true,
                //     // Avoids sending pageview hits from custom paths
                //     exclude: ["/preview/**", "/do-not-track/me/too/"],
                //     // Defaults to https://www.googletagmanager.com
                //     origin: "YOUR_SELF_HOSTED_ORIGIN",
                //   },
            },
        },
    ]
};