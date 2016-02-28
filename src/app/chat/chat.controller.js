(function(){
'use strict';

angular
  .module('GP-Chat-Angular')
  .controller('chatCtrl', chatCtrl);

  function chatCtrl($timeout, $interval, messagesService) {
    var chat = this;
    var reloadTime = 10000;
    var chatmessages = document.querySelector(".chat-messages");

    chat.status = '';
    chat.user = 'Dmitry-S';
    chat.messages = [];

    chat.send = function() {
      var time = new Date().getTime();
      var message = {
        user: chat.user,
        msg: chat.textbox,
        timestamp: time
      };

      /*messagesService.send(message);*/
      chat.messages.push(message);
      chat.status = "sending";
      chat.textbox = "";
      $timeout( function() { chat.status = "" }, 1200 );
      $timeout( function() { chatmessages.scrollTop = chatmessages.scrollHeight }, 10 );
    };

    messagesService.get().then(success, error);
    $interval(function(){
      console.log("get runs controller");
      messagesService.get().then(success, error);
    }, reloadTime);

    function success(response) {
      console.log(response)
      for (var i = 0, len = response.data.length; i < len; i++) {
        chat.messages.push(response.data[i]);
      }
      $timeout( function() { chatmessages.scrollTop = chatmessages.scrollHeight }, 10 );
    }
    function error(error) {
      console.log("Something goes wrong", error);
    }
  }
})();