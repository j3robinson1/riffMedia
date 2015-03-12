(function () {
  "use strict";
  angular.module('RiffApp')
  .factory('RiffService', function () {
    // var url = 'http://localhost:9000/';
    var riffs = [
    // {
    //   file: "originalriff1 - 3_10_15, 9.12 PM.m4a"
    // },

    {
      file: "originalriff2 - 3_10_15, 9.20 PM.m4a"
    },

    {
      file: "originalriff3 - 3_10_15, 9.14 PM.m4a"
    },

    {
      file: "originalriff4 - 3_10_15, 9.21 PM.m4a"
    },

    {
      file: "originalriff5 - 3_10_15, 9.23 PM.m4a"
    },

    {
      file: "originalriff6 - 3_10_15, 9.24 PM.m4a"
    },

    {
      file: "originalriff7 - 3_10_15, 9.25 PM.m4a"
    },

    {
      file: "originalriff8 - 3_10_15, 9.26 PM.m4a"
    },
  ];


  var getAllRiffs = function () {
    // return $http.get(url);
    return riffs;
  };

  return {
    getRiffs: getAllRiffs,

  };

});

})();
