define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var AppView = Backbone.View.extend({
        el : '#app-content',

        initialize: function (options) {
            this.viewToRender = options.view;
        },

        render: function () {
            this.$el.empty();
            var that = this;
            this.viewToRender.forEach(function (view) {
                that.$el.append(view.render().el);
            });
        }

    });

    return AppView;
});