const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let gpsSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
  latitude: {
    type: Number,
    required: [true, "is required"],
  },

  longitude: {
    type: Number,
    required: [true, "is required"],
  }
});

module.exports = mongoose.model('Gps', gpsSchema);
