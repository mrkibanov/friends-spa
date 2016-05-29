define([
    'jquery',
    'underscore',
    'backbone',
    'collections/friends',
    'bootstrap'
], function ($, _, Backbone, Friends, Bootstrap) {
    'use strict';

    var searchInput = Backbone.View.extend({
        tagName: 'input',
        className: 'form-control',
        attributes: {
            placeholder: 'Type name',
            'data-toggle': 'tooltip',
            'data-placement': 'top',
            title: 'Type at least 3 characters !'
        },
        events: {
            'keyup' : 'getResults'
        },
        
        getResults: function (e) {
            this.$el.tooltip({
                trigger: 'manual'
            });

            var inputVal = this.$el.val();
            if(inputVal.length >= 3) {
                this.hideTooltip();
                Friends.performSearch(inputVal.toLowerCase());
            }
            else if(inputVal.length === 0)
                this.hideTooltip();
            else
                this.$el.tooltip('show');
        },
        hideTooltip: function () {
            this.$el.tooltip('hide');
        }

    });

    return searchInput;
});
