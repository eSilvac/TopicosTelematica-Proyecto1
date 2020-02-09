const user = require('../v1/controllers/user');
const router = require('express').Router();

router.post('/v1/register', user.register);
router.post('/v1/login', user.login);

module.exports = router;
