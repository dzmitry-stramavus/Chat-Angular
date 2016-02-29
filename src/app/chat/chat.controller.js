(function(){
'use strict';

angular
  .module('GP-Say_Hi')
  .controller('chatCtrl', chatCtrl);

  function chatCtrl($timeout, $interval, messagesServiceMock) {
    var chat = this;
    var messagesService = messagesServiceMock;
    var chatmessages = document.querySelector(".chat-messages"); // use document (not $document), because I need method scrollTop and scrollHeight
    var RELOAD_TIME = 5000;

    chat.user = 'Dmitry-S';
    chat.status = '';
    chat.messages = [];

    chat.send = send;

    messagesService.get().then(success, error);
    $interval(function(){ messagesService.get().then(success, error) }, RELOAD_TIME);


    function send() {
      var currentTime = new Date().getTime();
      var message = {
        user: chat.user,
        msg: chat.textbox,
        timestamp: currentTime
      };

      messagesService.send(message);
      messagesService.get().then(success, error);

      chat.status = "sending";
      chat.textbox = "";
      $timeout( function() { chat.status = "" }, 1200 );
      $timeout( function() { chatmessages.scrollTop = chatmessages.scrollHeight }, 1 );
    }

    function success(response) {
      for (var i = 0, len = response.length; i < len; i++)
        chat.messages.push(response[i]);
      $timeout( function() { chatmessages.scrollTop = chatmessages.scrollHeight }, 1 );
    }
    function error(error) {
      console.log("Something goes wrong", error);
    }


    /*-=-=-=-=-=-=-=-=-=Imaginary Chating Group-=-=-=-=-=-=-=-=-=-=-=-=-*/
    var SEVEN_SECONDS = 7000;
    $interval(messagesServiceMock.sendRandomMessage, SEVEN_SECONDS)
  }
})();