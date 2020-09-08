const axios = require('axios');
const primerElemento = parseInt(document.getElementById("fibo1").value);
const segundoElemento = parseInt(document.getElementById("fibo2").value);
const maximoValorSerie = parseInt(document.getElementById("maximo").value);

function mostrar(){
        console.log(primerElemento)
        console.log(segundoElemento)
        console.log(maximoValorSerie)
};

function llamarApi(){
        axios.post('http://localhost:8081/fibonacci',{
            fibo1: primerElemento.value,
            fibo2: segundoElemento.value,
            maximo: maximoValorSerie.value
        })
        .then(function (response) {
          alert(response.data.listaPares)
          alert(response.data.listaTodos)
          alert(response.data.sumaPares)
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  };


var tablaCompleta; 

mostrar();
llamarApi();

async function traerInformacion(){
  axios.post('http://localhost:3000/traer-datos', {
    fibo1: fibo1.value,
    fibo2: fibo2.value,
    maximo: maximo.value
  })
  .then(async function (response) {
    tablaCompleta= await response.data.respuesta
    console.log(response.data.respuesta);
    imprimirTabla();
  })
  .catch(function (error) {
    console.log(error);
  });
}; 

async function imprimirTabla(){
  var col = [];
  for (var i = 0; i < tablaCompleta.length; i++) {
      for (var key in tablaCompleta[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
          }
      }
  }
  var tabla = document.createElement("tabla");
  var insertar = tabla.insertRow(-1);                   
  
  for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");    
      th.innerHTML = col[i];
      insertar.appendChild(th);
  }
  for (var i = 0; i < tablaCompleta.length; i++) {
  
      insertar = tabla.insertRow(-1);
  
      for (var j = 0; j < col.length; j++) {
          var tabCell = insertar.insertCell(-1);
          tabCell.innerHTML = tablaCompleta[i][col[j]];
      }
  }
  
  var informacion = document.getElementById("showData");
  informacion.innerHTML = "";
  informacion.appendChild(tabla);
  }

