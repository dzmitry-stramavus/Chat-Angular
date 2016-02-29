(function(){
'use strict';

angular
  .module('GP-Chat-Angular')
  .service('messagesService', serviceFunction);

  function serviceFunction($http){

    this.send = function(data) {
      return $http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/3', data);
    };

    this.get = function() {
      return $http.get('src/assets/fakeData/messages.json');
    };
  }

})();