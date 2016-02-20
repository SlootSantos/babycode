'use strict';

/**
 * @ngdoc function
 * @name babycodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the babycodeApp
 */
angular.module('babycodeApp')
  .controller('Quiz1Ctrl', function ($scope) {
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
      window.location = '/#/f2';
    };
  });


angular.module('babycodeApp')
  .controller('Quiz2Ctrl', function ($scope) {
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
      window.location = '/#/f3';
    };
  });


  angular.module('babycodeApp')
    .controller('Quiz3Ctrl', function ($scope) {
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
        window.location = '/#/f4';
      };
    });


    angular.module('babycodeApp')
      .controller('Quiz4Ctrl', function ($scope) {
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
          window.location = '/#/f1';
        };
      });
