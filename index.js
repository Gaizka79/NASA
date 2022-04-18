require('dotenv').config();
const express = require('express');
const morgan = require('./middlewares/morganConfig');
const checkDate = require ('./middlewares/checkMass');
const routerLanding = require('./routes/routesLanding')
const routerNeas = require('./routes/routesNeas');

const app = express();
const PORT = process.env.LOCAL_PORT || 5000;
//const PORT = 8080;

app.use(morgan(':date[clf] :method :referrer :host :status :param[id] - :response-time ms :body'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routerLanding); 
app.use('/api/neas', routerNeas);

app.use(checkDate);

app.listen(PORT, () => console.log(`API REST en el puerto secreto ${PORT} que no deberías ver, a las ${Date()}`));
