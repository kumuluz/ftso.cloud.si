module.exports = {
    siteMetadata: {
        title: `FTSO Cloud`,
        siteUrl: "https://ftso.cloud.si"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    "rubik",
                    "asap"
                ],
                display: "swap"
            }
        },
        {
            resolve: "gatsby-plugin-sass",
            options: {
                implementation: require("node-sass"),
                sassOptions: {
                    precision: 6
                }
            }
        },
        "gatsby-plugin-typescript",
        "gatsby-plugin-offline"
    ],
}
