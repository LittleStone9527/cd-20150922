'use strict';

/**
 * @ngdoc directive
 * @name cdApp.directive:cdConsole
 * @description
 * # cdConsole
 */
angular.module('cdApp')
  .directive('cdConsole', function ($location) {
    return {
      templateUrl: '/views/common/console.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        // 激活按钮
        scope.activeIndex = function () {
          var ret = -1;
          switch ($location.path()) {
            case "/private":
              ret = 3;
              break;
            default :
              ret = -1;
          }
          return ret;
        };
      }
    };
  });
