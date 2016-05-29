define([
    'jquery',
    'underscore',
    'backbone',
    'collections/friends',
    'bootstrap'
], function ($, _, Backbone, Friends) {
    'use strict';

    var searchInput = Backbone.View.extend({
        tagName: 'input',
        className: 'form-control',
        attributes: {
            placeholder: 'Type name',
            'data-toggle': 'tooltip',
            'data-placement': 'top',
            title: 'Type at least 2 characters !'
        },
        events: {
            'keyup' : 'getResults'
        },
        
        getResults: function (e) {
            this.$el.tooltip({
                trigger: 'manual'
            });

            var inputVal = this.$el.val();
            if(inputVal.length >= 2) {
                this.Tooltip('hide');
                Friends.performSearch(inputVal.toLowerCase());
            }
            else if(inputVal.length === 0)
                this.Tooltip('hide');
            else
                this.Tooltip('show');
        },
        Tooltip: function (render) {
            render === 'show'? this.$el.tooltip('show') : this.$el.tooltip('hide');
        }

    });

    return searchInput;
});
