'use strict';

/**
* @ngdoc directive
* @name jtree.directive:usage
* @description
* # usage
*/
angular.module('jtree')
.directive('usage', function ()
{
    return {
        templateUrl: 'scripts/usage/usage-d.html',
        
        restrict: 'EA'
    };
});