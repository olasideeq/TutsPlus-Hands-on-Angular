'use strict';

angular
  .module('swFrontApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })

      .when('/edges', {
        templateUrl: 'views/edges.html',
        controller: 'EdgesController'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
