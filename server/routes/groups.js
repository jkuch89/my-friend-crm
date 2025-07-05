
const express = require('express');
const router = express.Router();
const FriendGroup = require('../models/FriendGroup');

router.get('/', async (req, res) => {
  const groups = await FriendGroup.find().populate('members');
  res.json(groups);
});

router.post('/', async (req, res) => {
  const group = new FriendGroup(req.body);
  const saved = await group.save();
  res.status(201).json(saved);
});

router.put('/:id', async (req, res) => {
  const updated = await FriendGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await FriendGroup.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
