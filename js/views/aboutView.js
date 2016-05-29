define([
    'jquery',
    'underscore',
    'backbone',
    'models/about'
], function ($, _, Backbone, About) {
    'use strict';

    var aboutInfo = Backbone.View.extend({
        tagName: 'h3',
        
        initialize: function () {
            this.data = new About();
        },
        
        render: function () {
            this.$el.html(this.data.get('text'));
            return this;
        }

    });

    return aboutInfo;
});
