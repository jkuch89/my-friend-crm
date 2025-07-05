const express = require('express');
const router = express.Router();
const Friend = require('../models/friend');
const FriendGroup = require('../models/friendGroup');

router.get('/friends', async (req, res) => {
  const friends = await Friend.find();
  res.json(friends);
});

router.post('/friends', async (req, res) => {
  const newFriend = new Friend(req.body);
  await newFriend.save();
  res.status(201).json(newFriend);
});

router.get('/groups', async (req, res) => {
  const groups = await FriendGroup.find().populate('members');
  res.json(groups);
});

router.post('/groups', async (req, res) => {
  const newGroup = new FriendGroup(req.body);
  await newGroup.save();
  res.status(201).json(newGroup);
});

module.exports = router;
