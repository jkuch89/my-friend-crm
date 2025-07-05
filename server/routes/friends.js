
const express = require('express');
const router = express.Router();
const Friend = require('../models/Friend');

router.get('/', async (req, res) => {
  const friends = await Friend.find();
  res.json(friends);
});

router.get('/:id', async (req, res) => {
  const friend = await Friend.findById(req.params.id);
  res.json(friend);
});

router.post('/', async (req, res) => {
  const newFriend = new Friend(req.body);
  const saved = await newFriend.save();
  res.status(201).json(saved);
});

router.put('/:id', async (req, res) => {
  const updated = await Friend.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Friend.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
