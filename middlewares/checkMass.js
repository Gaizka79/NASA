const getByFecha = require('../utils/getByData');
let data;

const checkDate = async (req, res, next) => {
    if (req.query.minimum_mass) {
        next();
        return;
    }
    else if (req.query.from && req.query.to) {
        data = await getByFecha.getByFromTo(req.query);
        res.status(200).send(data);
        return data; 
    }
    else if (req.query.from) {
        data = await getByFecha.getByFrom(req.query)
        res.status(200).send(data);
        return;
    }
    else if (req.query.to) {
        data = await getByFecha.getByTo(req.query)
        res.status(200).send(data);
        return;
    }
    else {
        console.log("izorratuta nago!");
        res.status(400).send("Zeozer txarto atera da!!");
        return;
    }
}

module.exports = checkDate;
