const db = require('../utils/mongoConfig'),
    neas = require('../models/neas');

const params = { 'designation' : 1,
                'discovery_date' : 1,
                'period_yr' : 1,
                '_id' : 0 };

const getByFromTo = async (fechas, res) => {
    console.log("getbyfromtooooo");
    console.log(fechas);
    console.log(fechas.from);
    console.log(fechas.to);
    let arrayFechas = [],
        query = {};
    let from, to;
    /*if (fechas.from && fechas.to) {
        from = fechas.from;
        to = fechas.to;
    } else if (fechas.from && !fechas.to) {
        from = fechas.from;
    }else if (!fechas.from && fechas.to){
        to = fechas.to;
    }
    else {
        arrayFechas = res.status(404).send({ msg: "Error en el formato fechas!"});
        
        return arrayFechas;
    }*/
    
    let datos = await neas.find(query, params)
        .then((respuesta) => {
            console.log("los datos son:::::::::");
            //console.log(respuesta);
            return respuesta;
            
            //for (let i=0; i<datos.length; i++) {
                //let temp
            //}
        })
        .catch ((err) => {
            res.status(404).send({ msg: "Datos no encontrados"});
            return;
        })
        return datos;
}

const getNeasByFecha = {
    getByFromTo

};


module.exports = getNeasByFecha;