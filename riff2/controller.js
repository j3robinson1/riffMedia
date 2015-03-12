(function () {
  "use strict";
  angular.module('RiffApp')
  .controller('RiffController', function(RiffService) {
    var riffCtrl = this;
    riffCtrl.riffs = RiffService.getRiffs();
    // RiffService.getRiffs().success(function(data) {
    //   RiffCtrl.riffs = data;

  });
})();
