const mongoose = require('mongoose');

const friendGroupSchema = new mongoose.Schema({
  name: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friend' }]
});

module.exports = mongoose.model('FriendGroup', friendGroupSchema);
