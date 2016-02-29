'use strict';

describe('chatCtrl test', function() {

  var mockScope = {};
  var controller;
  var $httpBackend;

  beforeEach(angular.mock.module('GP-Say_Hi'));

  beforeEach(angular.mock.inject(function ($controller, _$httpBackend_) {

      $httpBackend = _$httpBackend_;

      controller = $controller('chatCtrl', {
          $httpBackend: $httpBackend
      });
  }));

  it('user should not be an empty string', function () {
      expect(controller.user).toBeNonEmptyString();
  });

  it('chat status should be an empty string', function () {
      expect(controller.status).toBeEmptyString();
  });

  it('when send message, chat status should be sending', function () {
      controller.send();
      expect(controller.status).toBe('sending');
  });

});