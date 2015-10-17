'use strict';

/**
* @ngdoc directive
* @name jtree.directive:capture
* @description
* # capture
*/
angular.module('jtree')
.directive('capture', function ()
{
    return {
        templateUrl: 'scripts/capture/capture-d.html',
        
        restrict: 'EA'
    };
});