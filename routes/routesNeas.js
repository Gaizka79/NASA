const express = require('express');
const routerNeas = express.Router();
const neasControllers = require('../controllers/NeasControllers');


routerNeas.get('/', neasControllers.getIndexNeas);

module.exports = routerNeas;