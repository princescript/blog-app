const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const router = require('./routes/Blog')
app.use('/api/blog', router)

Tapp.listen(PORT, () => {
    console.log(`Server Listen on PORT ${PORT} `)
})