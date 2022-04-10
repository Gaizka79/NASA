
const getIndex = (req, res) => {
    res.status(200).render("index");
}



const controllers = {
    getIndex
};

module.exports = controllers;