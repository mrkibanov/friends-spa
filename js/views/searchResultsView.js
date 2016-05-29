define([
    'jquery',
    'underscore',
    'backbone',
    'collections/friends',
    'text!templates/search-results.html'
], function ($, _, Backbone, Friends, SearchResultsTemplate) {
    'use strict';

    var searchResults = Backbone.View.extend({
        tagName: 'div',
        className: 'friend-results',
        template: _.template(SearchResultsTemplate),
        initialize: function () {
            this.listenTo(Friends, 'match-found', this.displayResult);
            this.listenTo(Friends, 'no-matches', this.noMatches);
        },

        render: function () {
            this.$el.html(this.template({}));
            return this;
        },
        displayResult: function () {
            this.$el.html(this.template({friends: Friends.searchRes}));
        },
        noMatches: function () {
            this.$el.html(this.template({error: 'No matches found'}));
        }
    });

    return searchResults;
});
