const express = require("express");
const router = express.Router();
const controllers = require('../controllers/controllers');

//router.route('/api')
  //  .get(controllers.getIndex);
router.get('/', controllers.getIndex);
    



module.exports = router;