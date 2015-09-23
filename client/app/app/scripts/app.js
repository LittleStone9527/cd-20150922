'use strict';

/**
 * @ngdoc overview
 * @name cdApp
 * @description
 * # cdApp
 *
 * Main module of the application.
 */
angular
  .module('cdApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'ngDialog'
  ])
  .config(function ($routeProvider, $locationProvider) {
    // html5支持
    $locationProvider.html5Mode(false).hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'defaultController'
      })
      .when('/private/', {
        templateUrl: 'views/private/index.html',
        controller: 'defaultController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  // 默认Controller
  .controller("defaultController", function ($scope, $rootScope, $routeParams, cdDialog) {

    // 模板地址
    $scope.templateUrl = {
      header: '/views/common/header.html',
      footer: '/views/common/footer.html',

      undefined: ''
    };

    // 弹窗
    $scope.cdDialog = cdDialog;

  })
  // 注册弹窗
  .run(function ($rootScope, $location, cdDialog) {
    // 列表弹窗
    cdDialog.register("list", "/views/dialog/list.html", null, null);
  })
;
