(function() {
  "use strict";

  angular.module('public')
    .service('RegService', RegService);


  RegService.$inject = ['$http', 'ApiPath'];

  function RegService($http, ApiPath) {
    var service = this;
    service.isRegistered = false;

    service.saveData = function(data) {

      service.fn = data.fn;
      service.ln = data.ln;
      service.email = data.email;
      service.phone = data.phone;
      //service.fav = data.fav;
      service.isRegistered = true;
    }

    service.getData = function() {
      var data = {
        fn: service.fn,
        ln: service.ln,
        email: service.email,
        phone: service.phone,
        fav: service.fav
      };

      return data;
    }

    service.checkFavItem = function(menuItem) {
      menuItem = menuItem.toUpperCase();
      return $http.get(ApiPath + '/menu_items/' + menuItem + '.json ')
        .then(
          function(response) {
            if (response.status == 200) {
              service.fav = {
                short_name:response.data.short_name,
                title: response.data.name,
                description: response.data.description
              }
              return response.data;
            }
            return false;
            //return response.data;
          },
          function(error) {
            return false;
          });
    };
  }
})();
