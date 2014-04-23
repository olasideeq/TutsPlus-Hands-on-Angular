'use strict'

angular.module('swFrontApp')
  .directive('navigation', function () {
    return {
      restrict: 'E', // Element
      templateUrl: 'views/partials/_navigation.html',
      controller: 'NavigationController'
    }
  })