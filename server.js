// Required modules
const express    = require('express');
const path       = require('path');
const bodyParser = require("body-parser");
const cors       = require('cors');
const passport   = require('passport');
const mongoose   = require('mongoose');

// Variables
const port       = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log('Server started on port: ' +port)
});