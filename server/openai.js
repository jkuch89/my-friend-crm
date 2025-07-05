
const { OpenAIApi, Configuration } = require('openai');

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openaiClient = new OpenAIApi(config);

module.exports = { openaiClient };
