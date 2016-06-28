exports.register = function (server, options, next) {
  server.ext('onPreResponse', function (request, reply) {
    if (request.response.variety && request.response.variety === 'view' && request.server.settings && request.server.settings.app) {
      request.response.source.context = request.response.source.context || {}
      request.response.source.context.app = request.server.settings.app
    }
    return reply.continue()
  })

  next()
}

exports.register.attributes = {
  pkg: require('../package.json')
}
