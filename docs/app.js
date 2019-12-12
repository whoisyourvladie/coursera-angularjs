(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)





  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundtemplate.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },

      controller: NarrowItDownController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  MenuSearchService.$inject = ['$http'];

  function NarrowItDownController(MenuSearchService) {
    var list = this;
    list.nothing = false;
    list.find = function(searchTerm) {
      list.found = [];
      if (!searchTerm) {
        list.nothing = true;
        list.found = [];
        return;
      }

      MenuSearchService.getMatchedMenuItems(searchTerm)

        .then(function(data) {
          if (data.length == 0)
            list.nothing = true;
          else
            list.found = data;

        })

    }

    // var origTitle = "Shopping List #1";
    // list.title = origTitle + " (" + list.items.length + " items )";
    //
    // list.itemName = "";
    // list.itemQuantity = "";

    list.removeItem = function(itemIndex) {
      list.found.splice(itemIndex, 1);

    };
  }


  function MenuSearchService($http) {
    var service = this;

    // List of shopping items
    //var items = [];

    // service.removeItem = function (itemIndex) {
    //   items.splice(itemIndex, 1);
    // };

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
          method: 'GET',
          url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        })
        .then(function(result) {
          // process result and only keep items that match
          var foundItems = [];
          for (var i = 0; i < result.data.menu_items.length; i++) {
            if (result.data.menu_items[i].description.indexOf(searchTerm) != -1) {
              foundItems.push(result.data.menu_items[i]);
            }
          }

          // return processed items
          return foundItems;
        });

    };

  }


  function MenuSearchFactory() {
    var factory = function() {
      return new MenuSearchService();
    };

    return factory;
  }

})();
