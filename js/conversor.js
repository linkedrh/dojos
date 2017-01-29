const conversor = {
    converterIndoArabicoParaRomano : function(valor) {
        if (valor >= 1 && valor <= 3999 && (valor % 1) === 0) {
            var valorConvertido = "";

            tratarNumero1000();
            tratarNumero900();
            tratarNumero500();
            tratarNumero400();
            tratarNumero100();
            tratarNumero90();
            tratarNumero50();
            tratarNumero40();
            tratarNumero10();
            tratarNumero9();
            tratarNumero5();
            tratarNumero4();
            tratarNumero1();

            return valorConvertido;
        } else {
            return "Valor nao convertido";
        }

        function tratarNumero1000() {
            tratarNumeroComRepeticao(1000, "M");
        }

        function tratarNumero900() {
            tratarNumeroSemRepeticao(900, "CM");
        }

        function tratarNumero500() {
            tratarNumeroSemRepeticao(500, "D");
        }

        function tratarNumero400() {
            tratarNumeroSemRepeticao(400, "CD");
        }

        function tratarNumero100() {
            tratarNumeroComRepeticao(100, "C");
        }

        function tratarNumero90() {
            tratarNumeroSemRepeticao(90, "XC");
        }

        function tratarNumero50() {
            tratarNumeroSemRepeticao(50, "L");
        }

        function tratarNumero40() {
            tratarNumeroSemRepeticao(40, "XL");
        }

        function tratarNumero10() {
            tratarNumeroComRepeticao(10, "X");
        }

        function tratarNumero9() {
            tratarNumeroSemRepeticao(9, "IX");
        }

        function tratarNumero5() {
            tratarNumeroSemRepeticao(5, "V");
        }

        function tratarNumero4() {
            tratarNumeroSemRepeticao(4, "IV");
        }

        function tratarNumero1() {
            tratarNumeroComRepeticao(1, "I");
        }

        function tratarNumeroSemRepeticao(valorEmIndoArabico, valorEmRomano) {
            if (valor / valorEmIndoArabico >= 1) {
                tratarNumero(valorEmIndoArabico, valorEmRomano);
            }
        }

        function tratarNumeroComRepeticao(valorEmIndoArabico, valorEmRomano) {
            while (valor / valorEmIndoArabico >= 1) {
                tratarNumero(valorEmIndoArabico, valorEmRomano);
            }
        }

        function tratarNumero(valorEmIndoArabico, valorEmRomano) {
            valorConvertido += valorEmRomano;
            valor -= valorEmIndoArabico;
        }
    },

    converterRomanoParaIndoArabico : function(valor) {
        valor = valor.toUpperCase();
        var caracteresInvalidos = valor.replace(new RegExp("I", "g"), "").replace(new RegExp("V", "g"), "").replace(new RegExp("X", "g"), "").replace(new RegExp("L", "g"), "").replace(new RegExp("C", "g"), "").replace(new RegExp("D", "g"), "").replace(new RegExp("M", "g"), "").trim();

        if (valor.length > 0 && valor == valor.trim() && caracteresInvalidos.length == 0) {
            var valorConvertido = 0;

            tratarAlgarismoM();
            tratarAlgarismoCM();
            tratarAlgarismoD();
            tratarAlgarismoCD();
            tratarAlgarismoC();
            tratarAlgarismoD();
            tratarAlgarismoXC();
            tratarAlgarismoL();
            tratarAlgarismoXL();
            tratarAlgarismoX();
            tratarAlgarismoIX();
            tratarAlgarismoV();
            tratarAlgarismoIV();
            tratarAlgarismoI();

            return valorConvertido;
        } else {
            return "Valor nao convertido";
        }

        function tratarAlgarismoM() {
            tratarAlgarismoComRepeticao("M", 1000);
        }

        function tratarAlgarismoCM() {
            tratarAlgarismoSemRepeticao("CM", 900);
        }

        function tratarAlgarismoD() {
            tratarAlgarismoSemRepeticao("D", 500);
        }

        function tratarAlgarismoCD() {
            tratarAlgarismoSemRepeticao("CD", 400);
        }

        function tratarAlgarismoC() {
            tratarAlgarismoComRepeticao("C", 100);
        }

        function tratarAlgarismoXC() {
            tratarAlgarismoSemRepeticao("XC", 90);
        }

        function tratarAlgarismoL() {
            tratarAlgarismoSemRepeticao("L", 50);
        }

        function tratarAlgarismoXL() {
            tratarAlgarismoSemRepeticao("XL", 40);
        }

        function tratarAlgarismoX() {
            tratarAlgarismoComRepeticao("X", 10);
        }

        function tratarAlgarismoIX() {
            tratarAlgarismoSemRepeticao("IX", 9);
        }

        function tratarAlgarismoV() {
            tratarAlgarismoSemRepeticao("V", 5);
        }

        function tratarAlgarismoIV() {
            tratarAlgarismoSemRepeticao("IV", 4);
        }

        function tratarAlgarismoI() {
            tratarAlgarismoComRepeticao("I", 1);
        }

        function tratarAlgarismoSemRepeticao(algarismoEmRomano, valorEmIndoArabico) {
            if (valor.startsWith(algarismoEmRomano)) {
                tratarAlgarismo(algarismoEmRomano, valorEmIndoArabico);
            }
        }

        function tratarAlgarismoComRepeticao(algarismoEmRomano, valorEmIndoArabico) {
            while (valor.startsWith(algarismoEmRomano)) {
                tratarAlgarismo(algarismoEmRomano, valorEmIndoArabico);
            }
        }

        function tratarAlgarismo(algarismoEmRomano, valorEmIndoArabico) {
            valor = valor.substring(algarismoEmRomano.length);
            valorConvertido += valorEmIndoArabico;
        }
    }
};

module.exports = conversor;
