const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Journal = new Schema({
  title: { type: String, required: true },
  body: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  image: String
});

module.exports = mongoose.model('Journal', Journal);
