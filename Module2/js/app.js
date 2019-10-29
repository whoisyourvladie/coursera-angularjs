(function() {
  'use strict';

  angular.module('app', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.inject = ['$scope','ShoppingListCheckOffService'];
  AlreadyBoughtController.inject = ['$scope','ShoppingListCheckOffService'];

  function ToBuyController($scope,ShoppingListCheckOffService) {
      var tobuy=this;

      tobuy.listToBuy = ShoppingListCheckOffService.getToBuy();

      $scope.buy=function(index){

        
          ShoppingListCheckOffService.bought(index);
          var boughtItem=tobuy.listToBuy.splice(index,1);



      }

  };

  function AlreadyBoughtController($scope,ShoppingListCheckOffService) {

    var alreadybought=this;
    alreadybought.listAlreadyBought=ShoppingListCheckOffService.getAlredyBought();

  };

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuyArr=[
      {
        name:'bread',
        number:2
      },
      {
        name:'fish',
        number:1
      },
      {
        name:'milk',
        number:5
      },
      {
        name:'tomato',
        number:8
      },
      {
        name:'beer',
        number:2
      },
    ];
    var alredyBoughtArr=[];

    service.getToBuy=function(){
      return toBuyArr;
    };

    service.getAlredyBought=function(){
      return alredyBoughtArr;
    }

    service.bought=function(index){
        alredyBoughtArr.push(toBuyArr[index]);
      }
  }
})();
