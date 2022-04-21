const db = require('../utils/mongoConfig'),
    landings = require('../models/landings');

const params = { "name" : 1, 
    "year" : 1, 
    "_id" : 0 };

const getByFromTo = async (fechas) => {
    let arrayFechas = [],
        query = {};

    let datos = await landings.find(query, params)
        .then((datos) => {
            for (let i=0; i<datos.length; i++) {
                let temp = new Date(datos[i].year).getUTCFullYear()
                if (temp >= parseInt(fechas.from) && temp <= parseInt(fechas.to)){
                    arrayFechas.push(datos[i]);
                }
            }
            return arrayFechas;
        })
        .catch((err) => console.log(err));
    return datos;
}

const getByFrom = async (fechas) => {
    let arrayFechas = [],
        query = {};

    let datos = await landings.find(query, params)
        .then((datos) => {
            for (let i=0; i<datos.length; i++) {
                let temp = new Date(datos[i].year).getUTCFullYear()
                if (temp >= fechas.from){
                    arrayFechas.push(datos[i]);
                }
            }
            return arrayFechas;
        })
        .catch((err) => console.log(err));
    return datos;
}
const getByTo = async (fechas) => {
    let arrayFechas = [],
        query = {};
        
    let datos = await landings.find(query, params)
        .then((datos) => {
            for (let i=0; i<datos.length; i++) {
                let temp = new Date(datos[i].year).getUTCFullYear()
                if (temp <= fechas.to){
                    arrayFechas.push(datos[i]);
                }
            }
            return arrayFechas;
        })
        .catch((err) => console.log(err));
    return datos;
}

const getByFecha = {
    getByFromTo,
    getByFrom,
    getByTo
}

module.exports = getByFecha;