let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  address: {
    city: String,
    state: String,
    country: String,
    pin: Number,
  },
});

userSchema.index({ username: 1, unique: true });
userSchema.index({ email: 1, unique: true });
userSchema.index({ country: 1, state: 1, unique: true });

module.exports = mongoose.model('user', userSchema);
