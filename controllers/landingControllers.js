require('mongoose');
const fetch = require('node-fetch');
const db = require('../utils/mongoConfig');
const landings = require('../models/landings');
//const popupS = require('popups');
const API_NASA = process.env.API_NASA;

const getIndex = (req, res) => {
    res.status(200).send('<h1> hello world </h1>');//("index");
}

const getMeteoritos = async (req, res) => {
    const query = { name: 'Aarhus' };
    const query2 = {};
    console.log(landings);
    console.log(query);
    landings.find(query)
        .then((landing) => res.status(200).send(landing))
        .catch((err) => console.log("mierda de error: " + err));
    //res.status(200).send("kaixo mundua")

}

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





const landingControllers = {
    getIndex,
    getMeteoritos
};
module.exports = landingControllers;