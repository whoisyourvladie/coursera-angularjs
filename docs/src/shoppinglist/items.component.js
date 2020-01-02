(function () {
'use strict';

angular.module('data')
.component('itemsList', {
  templateUrl: 'src/shoppinglist/templates/itemsList.template.html',
  bindings: {
    items: '<'
  }
});

})();
