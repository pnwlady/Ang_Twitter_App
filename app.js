// require('angular');

(function() {
  var app = angular.module('store', []);

  app.controller('StoreController' , function() {
    this.product = gem;
  });

})();

var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'blah',
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Emerald',
    price: 3.95,
    description: 'hah',
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Quartz',
    price: 1.95,
    description: 'ah',
    canPurchase: true,
    soldOut: false
  }
]
