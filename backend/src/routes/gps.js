const gps = require('../controllers/v1/gps');
const isLoggedIn = require("../middleware/isLoggedIn");
const router = require('express').Router();

router.post('/v1/send-data', isLoggedIn, gps.sendData);

module.exports = router;
