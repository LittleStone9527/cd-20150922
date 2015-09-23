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
        opt.data.self.$title = opt.title;
        dialog.dialogLis.push(opt.data.self);
        // view处理
        angular.element("#cd-view").css("display", "none");
        angular.element("#cd-console").css("display", "none");
        angular.element("#cd-header").css("display", "block");
        // TODO: 回调
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
      plain: false,

      preCloseCallback: function (val) {
        // view处理
        if (dialog.dialogLis.length == 1) {
          angular.element("#cd-view").css("display", "block");
          angular.element("#cd-console").css("display", "block");
          angular.element("#cd-header").css("display", "none");
        }
      }
    };

    // 弹窗模版
    dialog.dialogMap = {};

    // 弹窗实例
    dialog.dialogLis = [];

    // 注册弹窗
    dialog.register = function (dialogId, templateUrl, templateStr, className, title) {
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
        // class
        if (className && className.length > 0) {
          record.className = className;
        }
        // 标题
        if (title && title.length > 0) {
          record.title = title;
        }
        // 入库
        if (record.plain != undefined) {
          dialog.dialogMap[dialogId] = record;
        }
      }
    };

    // 关闭弹窗
    dialog.close = function (idx) {
      if (idx == undefined) {
        // 关闭最后弹窗
        if (dialog.dialogLis.length > 0) {
          dialog.dialogLis[dialog.dialogLis.length-1].close();
          dialog.dialogLis.splice(-1,1);
        }
      }
    };

    // 窗口标题
    dialog.title = function (idx) {
      var r = "";
      if (idx == undefined) {
        // 最后打开的窗口
        if (dialog.dialogLis.length > 0) {
          r = dialog.dialogLis[dialog.dialogLis.length-1].$title;
        }
      }
      return r;
    };

    return dialog;
  });
