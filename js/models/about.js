define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var About = Backbone.Model.extend({
        defaults: {
            text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque consequatur cumque dolor dolore est impedit in, incidunt nesciunt nihil nobis non nostrum nulla perferendis quasi quo rem sequi tempora! Alias at debitis ducimus ea in iste similique ullam voluptatem?'
        }
    });

    return About;
});