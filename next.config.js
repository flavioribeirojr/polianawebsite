const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  sassLoaderOptions: {
    data: '@import "assets";',
    includePaths: [path.join(__dirname, 'pages')],
    modules: true
  }
})