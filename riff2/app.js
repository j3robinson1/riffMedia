(function () {
  "use strict";

  angular.module('RiffApp', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'RiffController as riffCtrl'
    })


  });

})();
