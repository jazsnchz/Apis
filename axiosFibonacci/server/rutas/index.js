;
const EXPRESS = require('express')


let api = EXPRESS.Router()

    //Controles de datos
    fibonacciControles = require('../controles/fibonacci.js')


//End Points

api.post('/fibonacci-calculo',fibonacciControles.calculoFibo)
api.post('/traer-datos',fibonacciControles.traerDatos)

module.exports = api
