(function(){
'use strict';

angular
  .module('GP-Chat-Angular')
  .controller('chatCtrl', chatCtrl);

  function chatCtrl() {
    var chat = this;

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
  }
})();