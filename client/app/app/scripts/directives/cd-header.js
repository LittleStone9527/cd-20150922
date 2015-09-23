'use strict';

/**
 * @ngdoc directive
 * @name cdApp.directive:cdHeader
 * @description
 * # cdHeader
 */
angular.module('cdApp')
  .directive('cdHeader', function (cdDialog) {
    return {
      templateUrl: '/views/common/header-dialog.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the cdHeader directive');
        scope.cdDialog = cdDialog;
      }
    };
  });
