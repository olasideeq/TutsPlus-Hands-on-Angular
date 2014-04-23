'use strict'

angular.module('swFrontApp')
  .controller('NavigationController', function ($scope, $location) {
    // debugger
    $scope.isActive = function (path) {
      return path === $location.path();
    }
  })