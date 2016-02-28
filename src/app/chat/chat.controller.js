(function(){
'use strict';

angular
  .module('GP-Chat-Angular')
  .controller('chatCtrl', chatCtrl);

  function chatCtrl($timeout) {
    var chat = this;

    chat.status = "";

    chat.messages = [
      {
        self: true,
        user: {
          name: "Dmitry"
        },
        data: "Lorem ipsum dolor sit amet, consectetur ",
        timestamp: "23:55"
      },
      {
        self: false,
        user: {
          name: "Zina"
        },
        data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        timestamp: "00:04"
      },
      {
        self: true,
        user: {
          name: "Dmitry"
        },
        data: "Lorem ipsum dolor sit amet, ...",
        timestamp: "00:09"
      }
    ];

    chat.send = function() {
      var time = new Date().getTime().toString();

      chat.messages.push({
        self: true,
        user: {
          name: "Dmitry"
        },
        data: chat.textbox,
        timestamp: time
      });
      chat.status = "sending";
      chat.textbox = "";
      $timeout( function() { chat.status = "" }, 1200 );
    };
  }
})();