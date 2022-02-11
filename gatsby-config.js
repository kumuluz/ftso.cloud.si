module.exports = {
    siteMetadata: {
        title: `FTSO Plus`,
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
        "gatsby-plugin-sass",
        "gatsby-plugin-typescript",
        "gatsby-plugin-offline"
    ],
}
