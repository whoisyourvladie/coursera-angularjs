(function () {
'use strict';

angular.module('data')
.controller('CategoryitemsController', CategoryitemsController);

// Version with resolving to 1 item based on $stateParams in route config
CategoryitemsController.$inject = ['items'];
function CategoryitemsController(items) {
  var itemDetail = this;
  itemDetail.items = items.menu_items;
  itemDetail.category = items.category.name;
  // var item = items[$stateParams.itemId];
  // itemDetail.name = item.name;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
}

})();
