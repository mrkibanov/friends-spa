define([
    'jquery',
    'underscore',
    'backbone',
    'collections/friends',
    'views/friendView'
], function ($, _, Backbone, Friends, friendView) {
    'use strict';
    var FriendsView = Backbone.View.extend({
        tagName: 'div',
        className: 'list-group',

        initialize: function () {
            
        },

        render: function () {
            Friends.each(this.addFriend, this);
            return this;
        },

        addFriend: function(friend){
            var view = new friendView({model: friend});
            this.$el.append(view.render().el);
        }

    });

    return FriendsView;
});