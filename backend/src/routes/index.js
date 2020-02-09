const user = require('./user');
const gps = require('./gps');

const router = app => {
  app.use(user);
  app.use(gps);
};

module.exports = router;
