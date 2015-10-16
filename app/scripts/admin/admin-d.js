'use strict';

/**
* @ngdoc directive
* @name jtree.directive:admin
* @description
* # admin
*/
angular.module('jtree')
.directive('admin', function (Data)
{
    return {
        templateUrl: 'scripts/admin/admin-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope)
        {
            $scope.data = Data;
        }
    };
});