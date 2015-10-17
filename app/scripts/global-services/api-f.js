/**
 * @ngdoc service
 * @name jtree.Api
 * @description
 * # Api
 * Factory in the jtree.
 */
angular.module('jtree')
    .factory('Api', function ($location, $anchorScroll)
    {
        'use strict';

        // INITIALIZATION


        // ACTUAL DEFINITION
        var service = {};
        service.methods = {
            scrollTo: function (id) {
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash(id);
                    $anchorScroll();
            }
        };
        service.models = {
            capture:{},
            usage:{},
            offers:{}
        };

        return service;
    });