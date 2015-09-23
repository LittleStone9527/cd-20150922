'use strict';

/**
 * @ngdoc directive
 * @name cdApp.directive:cdConsole
 * @description
 * # cdConsole
 */
angular.module('cdApp')
  .directive('cdConsole', function ($location, cdDialog) {
    return {
      templateUrl: '/views/common/console.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        // 激活按钮
        scope.activeIndex = function () {
          var ret = -1;
          switch ($location.path()) {
            case "/":
              ret = 0;
              break;
            case "/private/":
              ret = 3;
              break;
            default :
              ret = -1;
          }
          return ret;
        };

        // 弹窗
        scope.cdDialog = cdDialog;

      }
    };
  });
