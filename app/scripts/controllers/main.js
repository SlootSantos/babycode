'use strict';

/**
 * @ngdoc function
 * @name babycodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the babycodeApp
 */
angular.module('babycodeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.evaluate = function () {
      alert($scope.name);
    };
  });
