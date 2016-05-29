define([
    'jquery',
    'underscore',
    'backbone',
    'views/friendsView',
    'collections/friends'
], function ($, _, Backbone, friendsView, Friends) {
    'use strict';

    var AppView = Backbone.View.extend({
        el : '#app-content',

        initialize: function (options) {
            this.viewToRender = options.view;
            // this.listenTo(Friends, 'reset', this.render);
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