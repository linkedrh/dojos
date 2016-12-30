const assert = require("assert");
const indoArabicoRomano = require("../js/indoArabicoRomano");

describe('indoArabicoRomano', function() {
  describe('converteIndoArabicoParaRomano', function() {
    it('quando o usuario digitar 1, sera retornado I', function() {
      assert.equal("I", indoArabicoRomano.converteIndoArabicoParaRomano(1));
    });

    it('quando o usuario digitar 3, sera retornado III', function() {
      assert.equal("III", indoArabicoRomano.converteIndoArabicoParaRomano(3));
    });

    it('quando o usuario digitar 5, sera retornado V', function() {
      assert.equal("V", indoArabicoRomano.converteIndoArabicoParaRomano(5));
    });

    it('quando o usuario digitar 10, sera retornado X', function() {
      assert.equal("X", indoArabicoRomano.converteIndoArabicoParaRomano(10));
    });

    it('quando o usuario digitar 50, sera retornado L', function() {
      assert.equal("L", indoArabicoRomano.converteIndoArabicoParaRomano(50));
    });

    it('quando o usuario digitar 100, sera retornado C', function() {
      assert.equal("C", indoArabicoRomano.converteIndoArabicoParaRomano(100));
    });

    it('quando o usuario digitar 500, sera retornado D', function() {
      assert.equal("D", indoArabicoRomano.converteIndoArabicoParaRomano(500));
    });

    it('quando o usuario digitar 1000, sera retornado M', function() {
      assert.equal("M", indoArabicoRomano.converteIndoArabicoParaRomano(1000));
    });

    it('quando o usuario digitar 1999, sera retornado MCMXCIX', function() {
      assert.equal("MCMXCIX", indoArabicoRomano.converteIndoArabicoParaRomano(1999));
    });

    context("nao sera realizada a conversao...", function() {
        it('quando o usuario digitar 0 ou um valor menor', function() {
           assert.equal("Valor nao convertido", indoArabicoRomano.converteIndoArabicoParaRomano(0));
        });
        
        it('quando o usuario digitar 4000 ou um valor maior', function() {
            assert.equal("Valor nao convertido", indoArabicoRomano.converteIndoArabicoParaRomano(4000));
        });

        it('quando o usuario digitar um valor decimal', function() {
           assert.equal("Valor nao convertido", indoArabicoRomano.converteIndoArabicoParaRomano(3.14));
        });
    });
  });
});