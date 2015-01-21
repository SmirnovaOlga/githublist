'use strict';

/* Controllers */

var app = angular.module('githubList.controllers', []);
app.controller('IndexCtrl', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http) {
  

    $scope.getList = function () {
        
        $scope.githubList = [];
        $scope.error = '';

        $http.get('https://api.github.com/users/' + $scope.name + '/repos').
  		
            success(function(data, status, headers, config) {               
                $scope.githubList = data;
            }).

            error(function(data, status, headers, config) {
                $scope.error = data.message;                
            });
    };
}]);
