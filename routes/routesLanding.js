const express = require("express");
const routerLanding = express.Router();
const landingControllers = require('../controllers/landingControllers');

//router.route('/api')
  //  .get(controllers.getIndex);
//router.get('/api', controllers.getIndex);
routerLanding.get('/', landingControllers.getMeteoritos);
routerLanding.get('/astronomy/landings');
routerLanding.get('/astronomy/landings/mass');
routerLanding.get('/astronomy/landings/class');
routerLanding.get('/astronomy/create');

    



module.exports = routerLanding;