
const mongoose = require('mongoose');

const FriendGroupSchema = new mongoose.Schema({
  name: String,
  description: String,
  members: [mongoose.Schema.Types.ObjectId]
}, { timestamps: true });

module.exports = mongoose.model('FriendGroup', FriendGroupSchema);
