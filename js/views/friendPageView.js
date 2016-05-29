define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/friend-info.html',
    'collections/friends',
    'models/friend'
], function ($, _, Backbone, attrTemplate, Friends, Friend) {
    'use strict';

    var AppView = Backbone.View.extend({
        tagName: 'div',
        className: 'single-friend',
        template: _.template(attrTemplate),

        initialize: function (options) {
            this.friendId = Friends.get(options.id);
        },

        render: function () {
            this.$el.html(this.template(this.friendId.toJSON() ));
            return this;
        },


    });

    return AppView;
});