const express = require('express');
const router = express.Router();
const Friend = require('../models/Friend');
const FriendGroup = require('../models/FriendGroup');

// Create a new friend
router.post('/friend', async (req, res) => {
  try {
    const friend = new Friend(req.body);
    await friend.save();
    res.status(201).json(friend);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all friends
router.get('/friend', async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new friend group
router.post('/group', async (req, res) => {
  try {
    const group = new FriendGroup(req.body);
    await group.save();
    res.status(201).json(group);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all friend groups with populated friends
router.get('/group', async (req, res) => {
  try {
    const groups = await FriendGroup.find().populate('friends');
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
