module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      {
    resolve: "gatsby-source-graphql",
    options: {
      // Arbitrary name for the remote schema Query type
      typeName: "django",
      // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
      fieldName: "DJANGO",
      // Url or Django Graphene Endpoint
      url: "http://127.0.0.1:8000/",
    },
  },

    ]
}
