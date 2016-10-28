(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);

  function InfoService() {
    var service = this;
    service.myInfo = {};

    service.getMyInfo = function () {
      return service.myInfo;
    };

    service.setMyInfo = function (info) {
      service.myInfo = info;
    };
  }

})();
