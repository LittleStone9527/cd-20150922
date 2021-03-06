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
      header: 'views/common/header.html',
      headerDialog: 'views/common/header-dialog.html',
      footer: 'views/common/footer.html',

      undefined: ''
    };

    // 弹窗
    $scope.cdDialog = cdDialog;

  })
  // 注册弹窗
  .run(function ($rootScope, $location, $http, $templateCache, ngDialog, cdDialog) {
    // 跳转时关闭弹窗
    $rootScope.$on('$locationChangeStart', function (e, n, c) {
      ngDialog.close();
    });
    // 缓存header
    var h = "views/common/header-dialog.html";
    $http.get(h).then(function (resp) {
      $templateCache.put(h, resp.data);
    });
    // 注册弹窗
    cdDialog.register("list", "views/dialog/list.html", null, null, "列表");
    cdDialog.register("setting", "views/dialog/setting.html", null, null, "设置");
  })
;
