const assert = require("assert");
const conversor = require("../js/conversor");

describe('conversor', function() {
  describe('converterIndoArabicoParaRomano', function() {
    it('quando o usuario digitar 1, sera retornado I', function() {
      assert.equal("I", conversor.converterIndoArabicoParaRomano(1));
    });

    it('quando o usuario digitar 4, sera retornado IV', function() {
      assert.equal("IV", conversor.converterIndoArabicoParaRomano(4));
    });

    it('quando o usuario digitar 5, sera retornado V', function() {
      assert.equal("V", conversor.converterIndoArabicoParaRomano(5));
    });

    it('quando o usuario digitar 9, sera retornado IX', function() {
      assert.equal("IX", conversor.converterIndoArabicoParaRomano(9));
    });

    it('quando o usuario digitar 10, sera retornado X', function() {
      assert.equal("X", conversor.converterIndoArabicoParaRomano(10));
    });

    it('quando o usuario digitar 40, sera retornado XL', function() {
      assert.equal("XL", conversor.converterIndoArabicoParaRomano(40));
    });

    it('quando o usuario digitar 50, sera retornado L', function() {
      assert.equal("L", conversor.converterIndoArabicoParaRomano(50));
    });

    it('quando o usuario digitar 90, sera retornado XC', function() {
      assert.equal("XC", conversor.converterIndoArabicoParaRomano(90));
    });

    it('quando o usuario digitar 100, sera retornado C', function() {
      assert.equal("C", conversor.converterIndoArabicoParaRomano(100));
    });

    it('quando o usuario digitar 400, sera retornado CD', function() {
      assert.equal("CD", conversor.converterIndoArabicoParaRomano(400));
    });

    it('quando o usuario digitar 500, sera retornado D', function() {
      assert.equal("D", conversor.converterIndoArabicoParaRomano(500));
    });

    it('quando o usuario digitar 900, sera retornado CM', function() {
      assert.equal("CM", conversor.converterIndoArabicoParaRomano(900));
    });

    it('quando o usuario digitar 1000, sera retornado M', function() {
      assert.equal("M", conversor.converterIndoArabicoParaRomano(1000));
    });

    it('quando o usuario digitar 1999, sera retornado MCMXCIX', function() {
      assert.equal("MCMXCIX", conversor.converterIndoArabicoParaRomano(1999));
    });

    it('quando o usuario digitar 3333, sera retornado MMMCCCXXXIII', function() {
      assert.equal("MMMCCCXXXIII", conversor.converterIndoArabicoParaRomano(3333));
    });

    it('quando o usuario digitar 3449, sera retornado MMMCDXLIX', function() {
      assert.equal("MMMCDXLIX", conversor.converterIndoArabicoParaRomano(3449));
    });

    it('quando o usuario digitar 3949, sera retornado MMMCMXLIX', function() {
      assert.equal("MMMCMXLIX", conversor.converterIndoArabicoParaRomano(3949));
    });

    context("nao sera realizada a conversao...", function() {
        it('quando o usuario digitar 0', function() {
           assert.equal("Valor nao convertido", conversor.converterIndoArabicoParaRomano(0));
        });

        it('quando o usuario digitar um valor menor que zero', function() {
           assert.equal("Valor nao convertido", conversor.converterIndoArabicoParaRomano(-1));
        });
        
        it('quando o usuario digitar 4000', function() {
            assert.equal("Valor nao convertido", conversor.converterIndoArabicoParaRomano(4000));
        });

        it('quando o usuario digitar um valor maior que 4000', function() {
            assert.equal("Valor nao convertido", conversor.converterIndoArabicoParaRomano(4001));
        });

        it('quando o usuario digitar um valor decimal', function() {
           assert.equal("Valor nao convertido", conversor.converterIndoArabicoParaRomano(3.14));
        });
    });
  });

  describe('converterRomanoParaIndoArabico', function() {
    it('quando o usuario digitar I, sera retornado 1', function() {
      assert.equal(1, conversor.converterRomanoParaIndoArabico("I"));
    });

    it('quando o usuario digitar IV, sera retornado 4', function() {
      assert.equal(4, conversor.converterRomanoParaIndoArabico("IV"));
    });

    it('quando o usuario digitar V, sera retornado 5', function() {
      assert.equal(5, conversor.converterRomanoParaIndoArabico("V"));
    });

    it('quando o usuario digitar IX, sera retornado 9', function() {
      assert.equal(9, conversor.converterRomanoParaIndoArabico("IX"));
    });

    it('quando o usuario digitar X, sera retornado 10', function() {
      assert.equal(10, conversor.converterRomanoParaIndoArabico("X"));
    });

    it('quando o usuario digitar XL, sera retornado 40', function() {
      assert.equal(40, conversor.converterRomanoParaIndoArabico("XL"));
    });

    it('quando o usuario digitar L, sera retornado 50', function() {
      assert.equal(50, conversor.converterRomanoParaIndoArabico("L"));
    });

    it('quando o usuario digitar XC, sera retornado 90', function() {
      assert.equal(90, conversor.converterRomanoParaIndoArabico("XC"));
    });

    it('quando o usuario digitar C, sera retornado 100', function() {
      assert.equal(100, conversor.converterRomanoParaIndoArabico("C"));
    });

    it('quando o usuario digitar CD, sera retornado 400', function() {
      assert.equal(400, conversor.converterRomanoParaIndoArabico("CD"));
    });

    it('quando o usuario digitar D, sera retornado 500', function() {
      assert.equal(500, conversor.converterRomanoParaIndoArabico("D"));
    });

    it('quando o usuario digitar CM, sera retornado 900', function() {
      assert.equal(900, conversor.converterRomanoParaIndoArabico("CM"));
    });

    it('quando o usuario digitar M, sera retornado 1000', function() {
      assert.equal(1000, conversor.converterRomanoParaIndoArabico("M"));
    });

    it('quando o usuario digitar MCMXCIX, sera retornado 1999', function() {
      assert.equal(1999, conversor.converterRomanoParaIndoArabico("MCMXCIX"));
    });

    it('quando o usuario digitar MMMCCCXXXIII, sera retornado 3333', function() {
      assert.equal(3333, conversor.converterRomanoParaIndoArabico("MMMCCCXXXIII"));
    });

    it('quando o usuario digitar MMMCDXLIX, sera retornado 3449', function() {
      assert.equal(3449, conversor.converterRomanoParaIndoArabico("MMMCDXLIX"));
    });

    it('quando o usuario digitar MMMCMXLIX, sera retornado 3949', function() {
      assert.equal(3949, conversor.converterRomanoParaIndoArabico("MMMCMXLIX"));
    });

    context("nao sera realizada a conversao...", function() {
        it('quando o usuario nao digitar valor', function() {
           assert.equal("Valor nao convertido", conversor.converterRomanoParaIndoArabico(""));
        });

        it('quando o usuario digitar espaços em branco', function() {
           assert.equal("Valor nao convertido", conversor.converterRomanoParaIndoArabico("  "));
        });

        it('quando o usuario digitar letras que pertencem ou nao ao conjunto utizado nos algarismos romanos', function() {
            assert.equal("Valor nao convertido", conversor.converterRomanoParaIndoArabico("MQCPXTIO"));
        });
        
        it('quando o usuario digitar somente letras que nao pertencem ao conjunto utizado nos algarismos romanos', function() {
            assert.equal("Valor nao convertido", conversor.converterRomanoParaIndoArabico("QPTOQ"));
        });
    });
  });
});