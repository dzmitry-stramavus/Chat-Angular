(function() {
  'use strict';

  angular
    .module('GP-Say_Hi')
    .factory('_', underscore);

  function underscore($window) {
    return $window._;
  }

})();