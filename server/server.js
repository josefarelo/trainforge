require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});