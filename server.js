require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/api/key', (req, res) => {
  res.json({ apiKey: process.env.WEATHER_API_KEY });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
