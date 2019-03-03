const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
  cssModules: true,
  sassLoaderOptions: {
    data: '@import "assets";',
    includePaths: [path.join(__dirname, 'pages')],
    modules: true
  }
})