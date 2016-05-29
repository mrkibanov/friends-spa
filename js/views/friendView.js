define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';
    
    var FriendView = Backbone.View.extend({
        tagName: 'a',
        className: 'list-group-item',

        render: function () {
            this.$el.html(this.model.get('name'));
            this.$el.attr('href', '#/friend/'+this.model.get('id'));
            return this;
        }

    });

    return FriendView;
});