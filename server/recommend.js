
const express = require('express');
const router = express.Router();
const Friend = require('../../models/Friend');
const { openaiClient } = require('../../services/openai');

router.get('/', async (req, res) => {
  const friends = await Friend.find();

  const prompt = `
You are a social relationship coach. Analyze the following list of friends and suggest 3–5 people the user should reach out to this week. Include why.

Friends: ${JSON.stringify(friends, null, 2)}

Respond in this format:
1. [Name] — [Reason]
`;

  const response = await openaiClient.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7
  });

  const suggestions = response.data.choices[0].message.content;
  res.json({ suggestions });
});

module.exports = router;
