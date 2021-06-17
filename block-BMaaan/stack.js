let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let stackSchema = new Schema({
  users: { type: String, index: true },
  question: { type: String },
  answer: { type: String },
});
