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
], function ($, _, Backbone, friendListView , friendPageView, searchInput, searchResults,               MainView, pageHeaderView, aboutView) {
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

        displayFriends : function () {
            new pageHeaderView({title: 'Friends'}).render();
            var view = [new friendListView()];
            new MainView({view : view}).render();
        },

        gotoSingleFriend: function (id) {
            var view = [new friendPageView({id: id})];
            new pageHeaderView({title: 'Friend: ' + view[0].friendId.get('name')}).render();
            new MainView({view : view}).render();
        },
        
        search: function () {
            new pageHeaderView({title: 'Search'}).render();
            var view = [new searchInput, new searchResults()];
            new MainView({view : view}).render();
        },

        about: function () {
            new pageHeaderView({title: 'About'}).render();
            var view = [new aboutView];
            new MainView({view : view}).render();
        }

    });
    return FriendsRouter;
});