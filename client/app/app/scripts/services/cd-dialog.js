'use strict';

/**
 * @ngdoc service
 * @name cdApp.cdDialog
 * @description
 * # cdDialog
 * Service in the cdApp.
 */
angular.module('cdApp')
  .factory('cdDialog', function ($q, $templateCache, $http, ngDialog) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var dialog = function (dialogId, scope, data) {
      //console.log("debug", dialogId);
      var deferred = $q.defer();

      if (dialog.dialogMap[dialogId] && dialog.dialogMap[dialogId].template) {
        // 弹窗
        var opt = angular.copy(dialog.defaultOpt);
        angular.extend(opt, dialog.dialogMap[dialogId]);
        opt.data = {};

        opt.data.self = ngDialog.open(opt);
        deferred.resolve();
      }

      return deferred.promise;
    };

    // 默认参数
    dialog.defaultOpt = {
      template: '/views/dialog/list.html',
      className: 'app-dialog',
      controller: "defaultController",

      showClose: false,
      disableAnimation: true,
      overlay: false,
      plain: false
    };

    // 弹窗
    dialog.dialogMap = {};

    // 注册弹窗
    dialog.register = function (dialogId, templateUrl, templateStr, className) {
      var record = {plain: undefined};
      if (dialogId) {
        // 定义
        if (templateUrl && templateUrl.length > 0) {
          record.template = templateUrl;
          record.plain = false;
          // 尝试缓存
          $http.get(templateUrl).then(function (resp) {
            $templateCache.put(templateUrl, resp.data);
          });
        } else if (templateStr && templateStr.length > 0) {
          record.template = templateUrl;
          record.plain = true;
        }
        if (className && className.length > 0) {
          record.className = className;
        }
        // 入库
        if (record.plain != undefined) {
          dialog.dialogMap[dialogId] = record;
        }
      }
    };

    return dialog;
  });
