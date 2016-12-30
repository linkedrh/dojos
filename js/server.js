var HttpDispatcher = require('../node_modules/httpdispatcher');
var http           = require('http');
var dispatcher     = new HttpDispatcher();

const indoArabicoRomano = require("../js/indoArabicoRomano");

const PORT = 8080; 

function handleRequest(request, response) {
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

var server = http.createServer(handleRequest);

dispatcher.setStatic('resources');

dispatcher.onGet("/converterIndoArabicoParaRomano", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype');
    res.setHeader('Access-Control-Allow-Credentials', true);

    var valor = indoArabicoRomano.converteIndoArabicoParaRomano(req.params.valor);

    res.writeHead(200, {'Content-Type': 'application/json'});
    var json = JSON.stringify({ 
        valorConvertido: valor
    });

    res.end(json);
}); 

server.listen(PORT, function() {
    console.log("Iniciando servidor em http://localhost:%s", PORT);
});
