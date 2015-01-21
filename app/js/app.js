'use strict';


angular.module('githubList', [
        'ngRoute',
        'githubList.filters',
        'githubList.services',
        'githubList.directives',
        'githubList.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'IndexCtrl'});        
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

