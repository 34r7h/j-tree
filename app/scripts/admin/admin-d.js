'use strict';

/**
* @ngdoc directive
* @name jtree.directive:admin
* @description
* # admin
*/
angular.module('jtree')
.directive('admin', function (Data, Api)
{
    return {
        templateUrl: 'scripts/admin/admin-d.html',
        
        restrict: 'EA',
        scope: {

        },
        controller: function ($scope)
        {
            $scope.data = Data;
            $scope.api = Api;
        }
    };
});