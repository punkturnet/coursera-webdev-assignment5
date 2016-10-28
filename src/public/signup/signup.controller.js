(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['$scope','MenuService', 'InfoService'];
function SignupController($scope, MenuService, InfoService) {
  var signupCtrl = this;
  signupCtrl.message = '';
  signupCtrl.Submit = function () {
    InfoService.setMyInfo(signupCtrl.user);
    signupCtrl.completed = true;
    MenuService.getMenuItem(signupCtrl.user.menunumber)
    .then(function(response){
      signupCtrl.message = response.name;

    },function(error){
      signupCtrl.message = 'No such menu number exists!';
    })
  };
}

})();
