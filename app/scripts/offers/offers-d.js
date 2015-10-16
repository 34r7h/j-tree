'use strict';

/**
* @ngdoc directive
* @name jtree.directive:offers
* @description
* # offers
*/
angular.module('jtree')
.directive('offers', function ()
{
    return {
        templateUrl: 'scripts/offers/offers-d.html',
        
        restrict: 'EA',
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope)
        {

        }
    };
});