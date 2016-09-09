const indoArabicoRomano = {
	converteIndoArabicoParaRomano : function (valor) {
		var retorno = "";
		if (valor >= 1 && valor <= 3999 && valor % 1 == 0) {
			if (valor == 1) {
				retorno = 'I';
			} else if (valor == 2){
				retorno = 'II';
			} else if (valor == 3){
				retorno = 'III';
			} else if (valor == 4) {
				retorno = 'IV';
			} else {
				var resultado = valor;

				while (resultado / 1000 >= 1) {
					retorno += "M";
					resultado -= 1000;
				}

				if (resultado / 900 >= 1) {
					retorno += "CM";
				}
				
				if (resultado >= 500 && resultado <= 899) {
					retorno += "D";
					resultado -= 500;
					
					while (resultado / 100 >= 1) {
						retorno += "C";
						resultado -= 100;
					}
				}
			}
		}
		return retorno;
	}
};

module.exports = indoArabicoRomano;
