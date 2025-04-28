const express = require('express');
const cors = require('cors');
require('dotenv').config();
const geminiRoutes = require('./routes/gemini');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/gemini', geminiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));