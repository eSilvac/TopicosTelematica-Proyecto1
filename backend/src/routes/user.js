const user = require('../controllers/v1/user');
const router = require('express').Router();

console.log(user.login)
router.post('/v1/login', user.login);
router.post('/v1/register', user.register);

module.exports = router;
