exports.register = function (server, options, next) {

    server.ext('onPreResponse', function (request, reply) {

        var response = request.response;
        if (response.variety && response.variety === 'view') {
            response.source.context = response.source.context || {};
            response.source.context.app = request.server && request.server.settings && request.server.settings.app || {};
        }
        return reply.continue();
    });

    next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};
