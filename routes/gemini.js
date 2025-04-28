const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await axios.post('https://gemini.api.com/chat', {
            prompt,
            api_key: process.env.GEMINI_API_KEY
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching response from Gemini API' });
    }
});

module.exports = router;