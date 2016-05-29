require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            exports: 'Bootstrap'
        }
    },
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        text: "../bower_components/text/text",
        bootstrap: "../bower_components/bootstrap/dist/js/bootstrap"
    }
});

require([
    'backbone',
    'routers/router',
    'collections/friends'
], function (Backbone, AppRouter, Friends) {
    Friends.getData();
    Friends.deferred.done(function () {
        new AppRouter();
        Backbone.history.start();
    });

});