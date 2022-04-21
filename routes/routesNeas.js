const express = require('express');
const routerNeas = express.Router(),
    neasControllers = require('../controllers/NeasControllers');
const checkDateNeas = require('../middlewares/checkNeas');

routerNeas.get('/', neasControllers.getIndexNeas);
//routerNeas.get('/neas', neasControllers.getByClass);//clase orbital
routerNeas.get('/neas', checkDateNeas, neasControllers.getByClass);//from to ¡¡REPASAR!!
routerNeas.post('/neas/create', neasControllers.postNeas);//nuevo
routerNeas.put('/neas/edit', neasControllers.putNeas);//editar
routerNeas.delete('/neas/delete', neasControllers.delteNeas);//borrar

module.exports = routerNeas;