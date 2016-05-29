// /**
//  * Created by sinout on 28.05.16.
//  */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/friendsView',
    'views/friendPageView',
    'views/searchInputView',
    'views/searchResultsView',
    'views/mainView',
    'views/pageHeaderView',
    'views/aboutView'
], function ($, _, Backbone, friendListView , friendPageView, searchInput, searchResults, MainView, pageHeaderView, aboutView) {
    'use strict';
    var FriendsRouter = Backbone.Router.extend({
        routes: {
            '' : 'index',
            'friends' : 'displayFriends',
            'friend/:id' : 'gotoSingleFriend',
            'search' : 'search',
            'about' : 'about'
        },

        index: function () {
            this.navigate('friends', true);
        },
        goto: function (view, pageTitle) {
            new pageHeaderView({title: pageTitle}).render();
            new MainView({view : view}).render();
        },

        displayFriends : function () {
            var localView = [new friendListView()];
            this.goto(localView, 'Friends');
        },

        gotoSingleFriend: function (id) {
            var localView = [new friendPageView({id: id})];
            this.goto(localView, 'Friend: ' + localView[0].friendId.get('name'));
        },
        
        search: function () {
            var localView = [new searchInput, new searchResults()];
            this.goto(localView, 'Search');
        },

        about: function () {
            var localView = [new aboutView];
            this.goto(localView, 'About');
        }

    });
    return FriendsRouter;
});