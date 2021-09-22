module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "playground",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "",
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
