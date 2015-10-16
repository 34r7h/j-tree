'use strict';

/**
* @ngdoc directive
* @name jtree.directive:iphone
* @description
* # iphone
*/
angular.module('jtree')
.directive('iphone', function (Api, Dummy)
{
    return {
        templateUrl: 'scripts/iphone/iphone-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope)
        {
            $scope.api = Api;
            $scope.dummy = Dummy;
            // init values
        }
    };
});