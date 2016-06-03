# hapi-context-app

[![Build Status](https://travis-ci.org/millette/hapi-context-app.svg)](https://travis-ci.org/millette/hapi-context-app)

hapi.js plugin - Include `request.server.settings.app` in default view context.

##Install

`npm install --save hapi-context-app`

##Background

For pretty much any website with app config (title, etc), it's handy to have that info in a view.

Instead of having to add `request.server.settings.app` to every route like so:

```js
handler: function (request, reply) {
    ...
    reply.view('index', {
        app: request.server.settings.app
    });
}
```

And in my template I might have something like:

    <h1>{{app.pageTitle}}</h1>

This module saves the work by ensuring `request.server.settings.app` is included in every view context on your server, so you don't need to manually include it in your handlers.

##Usage

Just register like any Hapi plugin:

```js
server.register(require('hapi-context-app'), (err) => {

    if (err) {
        throw err;
    }

    server.start(function (err) {

        if (err) {
            throw err;
        }
        console.log('Server started!');
    });
});
```

You can then output `app` in your views.

##Credit

The idea for this plugin came from https://github.com/hapijs/hapi/issues/2419. Credit to @ubaltaci for the preResponse handler idea.

Original source code came from https://github.com/mtharrison/hapi-context-credentials. Credit to Matt Harrison.
