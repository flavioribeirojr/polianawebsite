const routes = require('next-routes')

module.exports = routes()
  .add('/', '/', 'index')
  .add('blog')
  .add('artigo', '/artigo/:slug', 'post')