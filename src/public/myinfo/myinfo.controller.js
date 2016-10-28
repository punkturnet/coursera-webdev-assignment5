(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['InfoService', 'ApiPath'];
function MyInfoController(InfoService, ApiPath) {
  var myInfoCtrl = this;
  myInfoCtrl.basePath = ApiPath;
  myInfoCtrl.user = InfoService.getMyInfo();
  console.log(myInfoCtrl.user.firstname);
}

})();
