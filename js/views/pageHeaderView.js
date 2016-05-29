define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var PageHeading = Backbone.View.extend({
        el : '.page-header',
        template: _.template('<h1><%= title %></h1>'),

        initialize: function (options) {
            this.titleToDisplay = options.title;
            // this.listenTo(Friends, 'reset', this.render);
        },

        render: function () {
            this.$el.empty();
            this.$el.html(this.template({title: this.titleToDisplay}));
        }

    });

    return PageHeading;
});
