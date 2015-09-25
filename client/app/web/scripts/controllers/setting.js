'use strict';

/**
 * @ngdoc function
 * @name cdApp.controller:SettingCtrl
 * @description
 * # SettingCtrl
 * Controller of the cdApp
 */
angular.module('cdApp')
  .controller('SettingCtrl', function ($scope) {
    $scope.statusMsgPush = true;
    $scope.statusNetSmart = false;
  });
