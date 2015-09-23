'use strict';

/**
 * @ngdoc function
 * @name cdApp.controller:PrivateCtrl
 * @description
 * # PrivateCtrl
 * Controller of the cdApp
 */
angular.module('cdApp')
  .controller('PrivateCtrl', function ($scope, cdDialog) {
    $scope.cdDialog = cdDialog;
    $scope.toggleIdx = -1;
    $scope.toggleTrigger = function (idx) {
      if ($scope.toggleIdx == idx) {
        $scope.toggleIdx = -1;
      } else {
        $scope.toggleIdx = idx;
      }
    };
  });
