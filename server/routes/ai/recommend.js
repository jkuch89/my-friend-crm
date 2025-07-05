const express = require('express');
const router = express.Router();

router.post('/recommend', (req, res) => {
  const { context } = req.body;
  const message = `Based on your group activity '${context}', try planning something new this weekend!`;
  res.json({ message });
});

module.exports = router;
