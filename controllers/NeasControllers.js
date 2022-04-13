require('mongoose');
const db = require('../utils/mongoConfig');
const neas = require('../models/neas');

const getIndexNeas = (req, res) => {
    const query = { orbit_class: 'Apollo' };
    const query2 = {};
    console.log(neas);
    console.log(query);
    neas.find(query)
        .then((nea) => res.status(200).send(nea))
        .catch((err) => console.log("mierda de error: " + err));
    //res.status(200).send('kaixo mundua');
}

const neasControllers = {
    getIndexNeas
};
module.exports = neasControllers;