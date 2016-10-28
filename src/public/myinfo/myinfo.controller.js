(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['InfoService'];
function MyInfoController(InfoService) {
  var myInfoCtrl = this;
  myInfoCtrl.user = InfoService.getMyInfo();
  console.log(myInfoCtrl.user.firstname);
}

})();
