const indoArabicoRomano = {
    converteIndoArabicoParaRomano : function(valor) {
        var valorConvertido = "";

        if (valor >= 1 && valor <= 3999 && (valor % 1) === 0) {
            while (valor / 1000 >= 1) {
                valorConvertido += "M";
                valor = valor - 1000;
            }
            if (valor / 900 >= 1) {
                valorConvertido += "CM";
                valor = valor - 900;
            }
            if (valor / 500 >= 1) {
                valorConvertido += "D";
                valor = valor - 500;
            }
            if (valor / 400 >= 1) {
                valorConvertido += "CD";
                valor = valor - 400;
            }
            while (valor / 100 >= 1) {
                valorConvertido += "C";
                valor = valor - 100;
            }
            if (valor / 90 >= 1) {
                valorConvertido += "XC";
                valor = valor - 90;
            }
            if (valor / 50 >= 1) {
                valorConvertido += "L";
                valor = valor - 50;
            }
            if (valor / 40 >= 1) {
                valorConvertido += "XL";
                valor = valor - 40;
            }
            while (valor / 10 >= 1) {
                valorConvertido += "X";
                valor = valor - 10;
            }
            if (valor / 9 >= 1) {
                valorConvertido += "IX";
                valor = valor - 9;
            }
            if (valor / 5 >= 1) {
                valorConvertido += "V";
                valor = valor - 5;
            }
            if (valor / 4 >= 1) {
                valorConvertido += "IV";
                valor = valor - 4;
            }
            while (valor >= 1) {
                valorConvertido += "I";
                valor = valor - 1;
            }
        } else {
            valorConvertido = "Valor nao convertido";
        }
        return valorConvertido;
    }
};

module.exports = indoArabicoRomano;
