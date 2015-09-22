'use strict';

/**
 * @ngdoc directive
 * @name cdApp.directive:cdConsole
 * @description
 * # cdConsole
 */
angular.module('cdApp')
  .directive('cdConsole', function () {
    return {
      templateUrl: '/views/common/console.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the cdConsole directive');
      }
    };
  });
