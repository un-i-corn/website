module.exports = {
  siteMetadata: {
    title: 'UNiCORN',
    author: '202Accepted',
    description: 'ボードゲーム制作サークル「UNiCORN」の公式サイト',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'UNiCORN Website',
        short_name: 'UNiCORN',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
