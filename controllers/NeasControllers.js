require('mongoose');
const checkDate = require('../middlewares/checkMass');
const db = require('../utils/mongoConfig'),
    neas = require('../models/neas');
    const getNeasByFecha = require('../utils/getByDataNeas');
//const neas = require('../models/neas'); 

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

const getByClass = async (req, res) => {
    let arrayClass = [],
        byClass = req.query.class,
        query = { orbit_class: byClass},
        params = { 'designation' : 1,
                    'period_yr' : 1,
                    '_id' : 0 };
    console.log(query);
    await neas.find(query, params)
        .then((xClase) => res.status(200).send(xClase))
        .catch((err) => res.status(400).send(`Error: ${err}.`));
}

const getByFecha = async (req, res) => {
    if (!req.query) {
        res.status(404).send( { msg: "No hay fechas"});
        return;
    } else {
        let datos = await getNeasByFecha.getByFromTo(req.query, res);
        res.status(200).send(datos);
    }
};

const postNeas = async (req, res) => {
    try {
        const newNeas = new neas(req.body);
        await neas.create(newNeas);
        res.status(200).send("Creado con exito!");
    }
    catch (err) {
        res.status(400).send ({ msg: `Error: ${err}.`});
    }
}

const putNeas = async (req, res) => {
    /*let nea = req.body;
    let filter = { id: nea.id };*/
    let filter = { id: 465},
        update = { name: 'Mi NEA' };
    try {
        let doc = await neas.findOneAndUpdate(filter, update, { new: true });
        res.status(200).send({ msg: `${doc.id} actualizado OK`});
    }
    catch (err){
        res.status(400).send(`Error: ${err}.`);
    }
}

const delteNeas = async (req, res) => {
    /*let nea = req.body;
    let filter = { id: nea.id };*/
    let filter = { id: 789 };

    try {
        await neas.deleteOne(filter);
        res.status(200).send(`Borrado OK!`);
    }
    catch (err) {
        res.status(400).send(`Error: ${err}.`);
    }
}

const neasControllers = {
    getIndexNeas,
    getByClass,
    getByFecha,
    postNeas,
    putNeas,
    delteNeas
};
module.exports = neasControllers;

/*.then((xClase) => {
            for (let i=0; i<xClase.length; i++) {
                if (xClase[i].designation == byClass) {
                    arrayClass.push(xClase[i]);
                }
            }
            res.status(200).send(arrayClass);
            return arrayClass;
        })*/