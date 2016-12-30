const conversor = {
    converterIndoArabicoParaRomano : function(valor) {
        if (valor >= 1 && valor <= 3999 && (valor % 1) === 0) {
            var valorConvertido = "";

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

            return valorConvertido;
        } else {
            return "Valor nao convertido";
        }
    },

    converterRomanoParaIndoArabico : function(valor) {
        valor = valor.toUpperCase();
        var caracteresInvalidos = valor.replace(new RegExp("I", "g"), "").replace(new RegExp("V", "g"), "").replace(new RegExp("X", "g"), "").replace(new RegExp("L", "g"), "").replace(new RegExp("C", "g"), "").replace(new RegExp("D", "g"), "").replace(new RegExp("M", "g"), "").trim();

        if (valor.length > 0 && valor == valor.trim() && caracteresInvalidos.length == 0) {
            var valorConvertido = 0;

            while (valor.startsWith("M")) {
                valor = valor.substring(1, valor.length);
                valorConvertido += 1000;
            }
            if (valor.startsWith("CM")) {
                valor = valor.substring(2, valor.length);
                valorConvertido += 900;
            }
            if (valor.startsWith("D")) {
                valor = valor.substring(1, valor.length);
                valorConvertido += 500;
            }
            if (valor.startsWith("CD")) {
                valor = valor.substring(2, valor.length);
                valorConvertido += 400;
            }
            while (valor.startsWith("C")) {
                valor = valor.substring(1, valor.length);
                valorConvertido += 100;
            }
            if (valor.startsWith("XC")) {
                valor = valor.substring(2, valor.length);
                valorConvertido += 90;
            }
            if (valor.startsWith("L")) {
                valor = valor.substring(1, valor.length);
                valorConvertido += 50;
            }
            if (valor.startsWith("XL")) {
                valor = valor.substring(2, valor.length);
                valorConvertido += 40;
            }
            while (valor.startsWith("X")) {
                valor = valor.substring(1, valor.length);
                valorConvertido += 10;
            }
            if (valor.startsWith("IX")) {
                valor = valor.substring(2, valor.length);
                valorConvertido += 9;
            }
            if (valor.startsWith("V")) {
                valor = valor.substring(1, valor.length);
                valorConvertido += 5;
            }
            if (valor.startsWith("IV")) {
                valor = valor.substring(2, valor.length);
                valorConvertido += 4;
            }
            while (valor.startsWith("I")) {
                valor = valor.substring(1, valor.length);
                valorConvertido += 1;
            }

            return valorConvertido;
        } else {
            return "Valor nao convertido";
        }
    }
};

module.exports = conversor;
