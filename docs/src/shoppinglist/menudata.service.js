(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$q', '$http']

  function MenuDataService($q, $http) {
    var service = this;
    service.getAllCategories = function() {

      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      }).then(function(categories) {
          deferred.resolve(categories.data)
        },
        function(error) {
          deferred.reject(error)
        })
      return deferred.promise;
    };

    service.getItemsForCategory = function (categoryShortName) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
      }).then(function(items) {
          deferred.resolve(items.data)
        },
        function(error) {
          deferred.reject(error)
        })

      return deferred.promise;
    };
  }
})();
