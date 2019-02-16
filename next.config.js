const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const path = require('path')

module.exports = withCss(
  withSass({
      transpileModules: ['react-toastify'],
      cssModules: true,
      sassLoaderOptions: {
        data: '@import "assets";',
        includePaths: [path.join(__dirname, 'pages')],
        modules: true
      }
  })
)