'use strict';

describe('agileThoughts.version module', function() {
  beforeEach(module('agileThoughts.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
