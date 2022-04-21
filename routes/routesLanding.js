const express = require("express");
const routerLanding = express.Router();
const { getMeteosByMinMass, getMeteosByMass, getMeteosByClass, deleteMeteos, postMeteos, putMeteos } = require("../controllers/landingControllers");
//const landingControllers = require('../controllers/landingControllers');
const checkDate = require('../middlewares/checkMass');

//routerLanding.get('/', getMeteosByMinMass);
//routerLanding.get('/astronomy/landings/:minimum_mass?', checkDate, landingControllers.getMeteosByMinMass);
routerLanding.get('/astronomy/landings', checkDate, getMeteosByMinMass);
routerLanding.get('/astronomy/landings/mass/:mass', getMeteosByMass);
routerLanding.get('/astronomy/landings/class/:class', getMeteosByClass);
routerLanding.post('/astronomy/create', postMeteos);
routerLanding.put('/astronomy/landings/edit', putMeteos);
routerLanding.delete('/astronomy/landings/delete', deleteMeteos);//625de493b05ddb38f2f7046c

module.exports = routerLanding;