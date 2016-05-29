define([
   'underscore',
    'backbone',
    'models/friend'
], function (_, Backbone, Friend) {
    'use strict';
    
    var FriendsCollection = Backbone.Collection.extend({
        model: Friend,
        url : 'friends.json',
        initialize: function () {
            this.searchRes = [];
        },
        parse: function (res) {
            return res;
        },

        getData : function () {
            this.deferred = this.fetch({reset: true});
        },

        performSearch: function (val) {
            this.searchRes = this.filter(function (record) {
                if(record.get("name")
                        .toLowerCase()
                        .indexOf(val) > -1)
                    return record;
            });
            if(this.searchRes.length >= 1)
                this.trigger('match-found');
            else
                this.trigger('no-matches');
        }

    });

    return new FriendsCollection();
});
