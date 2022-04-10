require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/routes')

const app = express();
const PORT = process.env.LOCAL_PORT || 3000;

morgan.token('host', function (req, res) {
    return req.hostname;
});
morgan.token('body', function (req, res) {
    return [
      JSON.stringify(req.body)
    ]
})
morgan.token('param', function (req, res, param) {
});
app.use(morgan(':date[iso] :method :host :status :param[id] - :response-time ms :body'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views')

app.use('/api', router); 

app.listen(PORT, () => console.log(`API REST en el puerto secreto ${PORT} que no deberías ver, a las ${Date()}`));
