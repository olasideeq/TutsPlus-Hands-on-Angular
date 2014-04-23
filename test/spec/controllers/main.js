'use strict';

describe('Controller: NavigationController', function () {

  var location, scope;

  // First we fetch module where the controller resides
  beforeEach(module('swFrontApp'));

  // Then inject needed dependencies.
  beforeEach(inject( function ($controller, $rootScope, $location) {
    location = $location,
    scope = $rootScope.$new(),
    $controller('NavigationController', {
      $scope: scope
    })
  }))

  // finally write a test
  describe('isActive', function () {
    it('returns true when paths are the same', function () {
      location.path('/test');
      expect(scope.isActive('/test')).toBe(true);
    });
    it('returns false when paths are different', function () {
      location.path('/different')
      expect(scope.isActive('/test')).toBe(false);
    })
    it('returns true if it starts with the same word', function () {
      location.path('/test/1/show')
      expect(scope.isActive('/test')).toBe(true);
    })
    it('returns true if it starts with the same word followed by a query string', function () {
      location.path('/test/1/show?id=1234567890')
      expect(scope.isActive('/test')).toBe(true);
    })
  })

});

















