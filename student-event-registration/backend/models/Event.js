const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: String,
  date: String,
  description: String,
  organizer: String,
  location: String
});

module.exports = mongoose.model('Event', EventSchema);
