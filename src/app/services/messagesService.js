(function(){
'use strict';

angular
  .module('GP-Chat-Angular')
  .service('messagesService', serviceFunction);

  function serviceFunction($http, $q){
    var messages;

    this.send = function(data) {
      messages = data;
      /*return $http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/3', data);*/
    };

    this.get = function() {
      console.log("get runs service");
      return $http.get('src/assets/fakeData/messages.json')
        .then(function(data) {
          messages = data;
          return messages;
        });
    };

    function  error(reason) {
      console.log('Sorry, something went wrong. The source data is unavailable.' + reason);
    }
  }

})();
