const assert = require("assert");
const objetoExemplo = require("../js/exemplo");

describe('objetoExemplo', function() {
  describe('exemplo', function() {
    it('when 1 is given, it returns 1', function() {
      assert.equal(1, objetoExemplo.exemplo(1));
    });
    context("this is an example of a breaking test", function() {
		it('when 2 is given, it returns 2, but this test is a mess and it is wrong', function() {
			assert.equal(4, objetoExemplo.exemplo(2));
		});
	});
  });
});