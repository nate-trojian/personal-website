module.exports = {
  siteMetadata: {
    title: "Nathaniel Trojian",
    author: {
      name: "Nathaniel Trojian"
    },
    description: "This is my personal website"
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-fontawesome-css',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      },
    },
    'gatsby-transformer-remark'
  ],
};
