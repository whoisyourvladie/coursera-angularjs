(function() {
  'use strict';

  angular.module('app', [])
    .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.checkNumber = function() {
      if (!$scope.items) {
        $scope.message = "Please enter data first";
      } else {
        var items = $scope.items.split(',');
        var count = 0
        for (var i = 0; i < items.length; i++) {
          items[i].trim();
          if (items[i].length > 0)
            count++;
        };
        $scope.message = count > 3 ? "Too much!" : "Enjoy!";
      };
    }
  }
})();
