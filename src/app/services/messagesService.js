(function(){
'use strict';

angular
  .module('GP-Say_Hi')
  .service('messagesService', serviceFunction);

  function serviceFunction($http){
    var lastMessageTimestamp = 0;

    this.send = function(data) {
      return $http.get([
          'https://fathomless-everglades-3680.herokuapp.com//api/message/list?',
          'timestamp=',
          data.timestamp,
          '&msg=',
          data.msg,
          '&user=',
          data.user
        ].join(''));
    };

    this.get = function() {

      var promise = $http.get([
          'https://fathomless-everglades-3680.herokuapp.com//api/message/list?',
          'timestamp=',
          lastMessageTimestamp
        ].join(''));

      promise.then(function(data){ lastMessageTimestamp = data[data.length - 1].timestamp; });
      return promise;
    };
  }

})();