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
    var refresh = function() {
      $scope.name = "";
    };
    refresh();

    $scope.evaluate = function () {
      var name = angular.lowercase($scope.name);

      if (name === 'flo') {
        alert(name);
      }else {
        alert('wrong');
      }
      refresh();
      window.location = '/#/about';
    };
  });
