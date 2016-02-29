(function(){
  'use strict';

  angular
    .module('GP-Chat-Angular')
    .service('messagesServiceMock', serviceFunction);

    function serviceFunction($http, $q){
      var lastTimestamp = 0;
      var messages = [
        {
          "timestamp": 1456651674675,
          "user": "Olga",
          "msg": "Hi!"
        },
        {
          "timestamp": 1456651692612,
          "user": "Anton",
          "msg": "Hi-hi!"
        },
        {
          "timestamp": 1456651693333,
          "user": "Dmitry-S",
          "msg": "Wow!"
        },
        {
          "timestamp": 1456651891409,
          "user": "Olga",
          "msg": "How are you?"
        }
      ];

      this.send = function(data) {
        messages.push(data);
      };

      this.get = function() {
        var i, len;
        var newMessages = [];

        for (var i = 0, len = messages.length; i < len; i++) {
          if (messages[i].timestamp > lastTimestamp) newMessages.push(messages[i]);
        }
        lastTimestamp = messages[i - 1].timestamp;

        return $q.when(newMessages);
      };
    }
})();