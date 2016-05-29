define([
  'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Friend = Backbone.Model.extend({
        defaults: {
           id: 0,
           name: '',
           secondName: '',
           birthDate: '',
           city: ''
        },
    });

    return Friend;
});