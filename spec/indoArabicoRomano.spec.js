const assert = require("assert");
const indoArabicoRomano = require("../js/indoArabicoRomano");

describe('indoArabicoRomano', function() {
  describe('converteIndoArabicoParaRomano', function() {
    it('quando o usuário digitar 1, será retornado I', function() {
      assert.equal("I", indoArabicoRomano.converteIndoArabicoParaRomano(1));
    });

    it('quando o usuário digitar 2, será retornado II', function() {
      assert.equal("II", indoArabicoRomano.converteIndoArabicoParaRomano(2));
    });

    it('quando o usuário digitar 3, será retornado III', function() {
      assert.equal("III", indoArabicoRomano.converteIndoArabicoParaRomano(3));
    });
	
	it('quando o usuário digitar 4, será retornado IV', function() {
      assert.equal("IV", indoArabicoRomano.converteIndoArabicoParaRomano(4));
    });
	
	it('quando o usuário digitar 1000, será retornado M', function() {
      assert.equal("M", indoArabicoRomano.converteIndoArabicoParaRomano(1000));
    });
	
	it('quando o usuário digitar 2000, será retornado MM', function() {
      assert.equal("MM", indoArabicoRomano.converteIndoArabicoParaRomano(2000));
    });

	it('quando o usuário digitar 900, será retornado CM', function() {
      assert.equal("CM", indoArabicoRomano.converteIndoArabicoParaRomano(900));
    });
	
	it('quando o usuário digitar 500, será retornado D', function() {
      assert.equal("D", indoArabicoRomano.converteIndoArabicoParaRomano(500));
    });
	
	it('quando o usuário digitar 800, será retornado DCCC', function() {
      assert.equal("DCCC", indoArabicoRomano.converteIndoArabicoParaRomano(800));
    });
	
	context("quando o valor for inválido", function() {
		it('quando o usuário digitar 0, não será convertido em romano', function() {
		   assert.equal("", indoArabicoRomano.converteIndoArabicoParaRomano(0));
		});
		
		it('quando o usuário digitar 4000, não será convertido em romano', function() {
			assert.equal("", indoArabicoRomano.converteIndoArabicoParaRomano(4000));
		});

		it('quando o usuário digitar um valor decimal, não será convertido em romano', function() {
		   assert.equal("", indoArabicoRomano.converteIndoArabicoParaRomano(3.14));
		});

	});
  });
});