const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  studentEmail: String,
  eventName: String,
  rating: Number,
  comments: String
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
