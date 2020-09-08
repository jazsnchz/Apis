var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
var modelos = require("../server/models");

app.use(cors())
app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

//variables
let maximoValorSerie;
var resultado = {
    sumaPares : 0,
    listaPares : [],
    listaTodos : []    
}

var corsOptions = {
    origin: 'http://127.0.01:5500/client/fibonacci.html',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

      var server = app.listen(8081, function(){
      var host= server.address().address
      var port= server.address().port
      console.log(`Example app listening on port ${host,port}!`)
  });

  app.get('/', function(req,res){
      res.send('holi')
  })


  app.get('/fibonacci', function(req,res){
    
            let primerElemento  =parseInt(document.getElementById( "fibo1" ).value ) ;
            let segundoElemento  =  (document.getElementById( "fibo2" ).value ) ;
            maximovalueSerie =parseInt(document.getElementById( "maximo" ).value ) ;
            
            if(esPar(primerElemento)){
                resultado.listaPares.push(primerElemento);
            }
            
            if(esPar(segundoElemento)){
                resultado.listaPares.push(segundoElemento);
            }
    
            alert(generadorFibonacci(primerElemento,segundoElemento).sumaPares);
            console.log(resultado.listaTodos)

            res.send(resultado);
        })
            var esPar = function(numero){
                if (numero%2 === 0) {
                    return true;
                } else {
                    return false;
                }
            }
            
            var generadorFibonacci = function(anterior,ultimo){
                if (anterior + ultimo > maximoValorSerie) {
                    return resultado;
                } else {
                    nuevo = anterior + ultimo;
                    if(esPar(nuevo)){
                        resultado.sumaPares += nuevo;
                        resultado.listaPares.push(nuevo);  //inserta en el array de pares
                    }
                    resultado.listaTodos.push(nuevo);  //inserta en el array de todos los elementos
                    return generadorFibonacci(ultimo,nuevo);
                }
            }