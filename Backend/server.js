require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const PORT = process.env.PORT || 7000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/books', bookRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
