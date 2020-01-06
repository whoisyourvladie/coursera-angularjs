(function() {
  "use strict";

  angular.module('public')
    .controller('AccountController', AccountController);

  AccountController.$inject = ["RegService"];

  function AccountController(RegService) {
    var reg = this;
    reg.isFavExist = true;
reg.isRegistered = RegService.isRegistered;
reg.data= RegService.getData();

    reg.submit = function() {
      var data = {
        fn: reg.user.firstname,
        ln: reg.user.lastname,
        email: reg.user.email,
        phone: reg.user.phone,
        //fav: reg.user.menuitem
      }
      RegService.saveData(data);
      //RegService.isRegistered = true;
      reg.isRegistered = RegService.isRegistered;
    }


    reg.checkfav = function() {
      RegService.checkFavItem(reg.user.menuitem).then(function(response) {
        if (response) {
          reg.isFavExist = true;

        } else {
          reg.isFavExist = false;

        }
      });
    }
  }
})();
