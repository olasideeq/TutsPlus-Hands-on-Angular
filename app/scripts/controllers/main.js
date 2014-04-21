'use strict';

angular.module('swFrontApp')
  .controller('MainCtrl', function ($scope, $resource) {
    // $resource('api/edges').query();

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
