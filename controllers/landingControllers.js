require('mongoose');
const fetch = require('node-fetch');
const db = require('../utils/mongoConfig');
const landings = require('../models/landings');
const checkDate = require('../middlewares/checkMass');
const getByFecha = require('../utils/getByData');
const API_NASA = process.env.API_NASA;

const getMeteosByMinMass  = async (req, res) => {
    let arrayMassMin = [];
    let massMin = parseInt(req.query.minimum_mass);
    let query = { mass: { $gte : massMin }},
        params = { "name" : 1, 
        "mass" : 1, 
        "_id" : 0 };

    await landings.find(query, params)
        .then((xMasa) => {
            for (let i=0; i<xMasa.length; i++) {
                if (xMasa[i].mass >= massMin) {
                    arrayMassMin.push(xMasa[i]);
                }
            }
            res.status(200).send(arrayMassMin)})
        .catch((err) => console.log(err));
}

const getMeteosByMass = async (req, res) => {
    let masa = req.params.mass;
    console.log(masa);
    let query = { mass: masa },
        params = { "name" : 1, 
        "mass" : 1, 
        "_id" : 0 };
    await landings.find(query, params)
        .then((xMasa) => res.status(200).send(xMasa))
        .catch((err) => res.send(err));
};

const getMeteosByClass = async (req, res) => {
    let clase = req.params.class;
    console.log(clase);
    let query = { recclass: clase };
    await landings.find(query)
        .then((xClass) => res.status(200).send(xClass))
        .catch((err) => res.status(400).send(err));
};
    
const postMeteos = async (req, res) => {
    try {
        const newLanding = new landings(req.body);
        await landings.create(newLanding);
        res.status(200).send("Creado con exito!!");
    }
    catch (err) {
        res.status(400).send({ msg: `Error: ${err}.`});
    }
}

const putMeteos = async (req, res) => {
    /*let meteo = req.body;
    let filter = { id: meteo.id };*/
    let filter = { id: 465 },
        update = { name: 'Mi meteorito'};
    try {
        let doc = await landings.findOneAndUpdate(filter, update, { new: true });
        res.status(200).send({ msg: `${doc.id} actualizado OK!`});
    }
    catch (err){
        res.status(400).send(`Error: ${err}.`);
    }
}

const deleteMeteos = async (req, res) => {
    /*let meteo = req.body;
    let filter = { id: meteo.id };*/
    let filter = { id: 789 };

    try{
        let doc = await landings.deleteOne(filter);
        res.status(200).send(`borrado OK!`);
    }
    catch (err) {
        res.status(400).send(`Error: ${err}.`);
    }
}

const landingControllers = {
    getMeteosByMinMass,
    getMeteosByMass,
    getMeteosByClass,
    postMeteos,
    putMeteos,
    deleteMeteos
};
module.exports = landingControllers;


/*
const NOVALEgetMeteoritos = async (req, res) => {
    //if (err) throw err;
    console.log("control");
    let meteosAmostrar = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-01-01&end_date=2015-01-02&api_key=${API_NASA}`)
        .then(async(response) => {
            let data= await response.json();
            return data;
            //console.log(data);
        })
        .catch((err) => {
            console.log("error: " + err);
            //throw err;
        })
    //res.status(200).render("");
    //res.status(200).send('<h1> hello world </h1>');//("index");
    res.status(200).send(meteosAmostrar);//("index");
}
*/