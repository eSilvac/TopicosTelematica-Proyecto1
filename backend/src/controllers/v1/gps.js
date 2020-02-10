const { Gps } = require('../../models/config');

module.exports = {
  async sendData(req, res, next) {
    let data = req.body;
    data._user = req.currentUser;

    try {
      const gpsData = await Gps.create(data)
      res.status(200).json(gpsData);
    } catch (err) {
      next(err);
    }
  },

  async getData(req, res) {
    console.log("asd")
    try {
      const gpsData = await Gps.find()
      res.status(200).json(gpsData);
    } catch (err) {
      next(err);
    }
  }
}
