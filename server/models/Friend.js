
const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  birthday: Date,
  tags: [String],
  groups: [mongoose.Schema.Types.ObjectId],
  notes: String,
  lastContactedAt: Date
}, { timestamps: true });

module.exports = mongoose.model('Friend', FriendSchema);
