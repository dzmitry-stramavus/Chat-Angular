(function(){
  'use strict';

  angular
    .module('GP-Say_Hi')
    .service('messagesServiceMock', serviceFunction);

    function serviceFunction($http, $q, _){
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
        return $q.when({success: true});
      };

      this.get = function() {
        var newMessages = [];

        _.each(messages, function(message){
          if (message.timestamp > lastTimestamp) newMessages.push(message);
        });

        lastTimestamp = messages[messages.length - 1].timestamp;

        return $q.when(newMessages);
      };

      this.sendRandomMessage = function() {
        var timestamp = new Date().getTime();
        var NUMBER_OF_MESSAGES = 8;
        var randomMessages = [
          {
            "user": "Max",
            "msg": "Hi all!"
          },
          {
            "user": "Timon",
            "msg": "Hi-hi!"
          },
          {
            "user": "Vasia",
            "msg": "Hi there!"
          },
          {
            "user": "Nastya",
            "msg": "What's up?"
          },
          {
            "user": "Alisa",
            "msg": "Hi :)"
          },
          {
            "user": "Markus",
            "msg": "Who are you?"
          },
          {
            "user": "Tina",
            "msg": "I'm lost!!!"
          },
          {
            "user": "Adam",
            "msg": "Where am I?"
          }
        ];
        var message = getRandomMessage();
        message.timestamp = timestamp;
        messages.push(message);

        function getRandomMessage() {
          return randomMessages[Math.floor(Math.random()*NUMBER_OF_MESSAGES)];
        }
      }
    }
})();