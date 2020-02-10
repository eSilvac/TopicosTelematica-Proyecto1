const gps = require('../controllers/v1/gps');
const isLoggedIn = require("../middleware/isLoggedIn");
const router = require('express').Router();

router.get('/v1/gps-data', gps.getData);
router.post('/v1/send-data', isLoggedIn, gps.sendData);

module.exports = router;
