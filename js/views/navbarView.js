define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var Navbar = Backbone.View.extend({
        el: '#navbar-links',
        events : {
            'click a' : 'setActive'
        },

        setActive: function (e) {
            this.$el.find('li').removeClass('active');
            $(e.target).parent().addClass('active');
        }

    });

    return Navbar;
});
