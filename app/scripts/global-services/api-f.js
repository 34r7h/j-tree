/**
 * @ngdoc service
 * @name jtree.Api
 * @description
 * # Api
 * Factory in the jtree.
 */
angular.module('jtree')
    .factory('Api', function ()
    {
        'use strict';

        // INITIALIZATION


        // ACTUAL DEFINITION
        var service = {};
        service.methods = {};
        service.models = {
            capture:{},
            usage:{},
            offers:{}
        };

        return service;
    });