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
    'ngTouch'
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
  .controller("defaultController", function ($scope) {

    // 模板地址
    $scope.templateUrl = {
      header: '/views/common/header.html',
      footer: '/views/common/footer.html',

      undefined: ''
    };


  })
;
