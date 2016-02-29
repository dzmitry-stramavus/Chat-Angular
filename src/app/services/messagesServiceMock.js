(function(){
  'use strict';

  angular
    .module('GP-Chat-Angular')
    .service('messagesServiceMock', serviceFunction);

    function serviceFunction($http, $q){
      var lastTimestamp = '';
      var messages = [
        {
          "user": "Olga",
          "msg": "Hi!",
          "timestamp": 1456651674675
        },
        {
          "user": "Anton",
          "msg": "Hi-hi!",
          "timestamp": 1456651692612
        },
        {
          "user": "Dmitry-S",
          "msg": "Wow!",
          "timestamp": 1456651693333
        },
        {
          "user": "Olga",
          "msg": "How are you?",
          "timestamp": 1456651891409
        }
      ];

      this.send = function(data) {
        messages.push(data);
        console.log(messages);
      };

      this.get = function() {
        if (!lastTimestamp) {
          lastTimestamp = messages[messages.length - 1].timestamp;
          return $q.when(messages);
        }

        var i;
        var len;
        var newMessages = [];

        for (i = 0, len = messages.length; i < len; i++) {
          console.log(lastTimestamp, messages[i].timestamp)
          if (messages[i].timestamp > lastTimestamp) {
            console.log(messages[i])
            newMessages.push(messages[i]);
          }
        }
        lastTimestamp = messages[i - 1].timestamp;
        console.log(newMessages);
        return $q.when(newMessages);
      };
    }
})();