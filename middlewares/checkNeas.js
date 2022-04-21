const getByFechaNeas = require('../utils/getByDataNeas');
const neasControllers =require('../controllers/NeasControllers');
let data = [];

const checkDateNeas = async (req, res, next) => {
    if (req.query.class) {
        console.log("estamoos en el middleware");
        next();
        return;
    }
    else if (req.query.from && req.query.to) {
        data = await getByFechaNeas.getByFromTo(req.query, res);
        res.status(200).send(data);
        return data;
    }
    else if (req.query.from && !req.query.to) {
        //getByFrom
    }
    else if (!req.query.from && req.query.to){
        //getByTo
    }
    else {
        console.log("no hay fechas");
        next();
        return;
    }

}

module.exports = checkDateNeas;