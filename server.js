// Required modules
const express    = require('express');
const path       = require('path');
const bodyParser = require("body-parser");
const cors       = require('cors');
const passport   = require('passport');
const mongoose   = require('mongoose');

// Variables
const port       = process.env.PORT || 5000;
const app    = express();

// Include files
const users = require('./routes/users');

//DATABASE

// Import database file
const config = require('./config/database');

// Initialize connection to database
mongoose.connect(config.database);

// Check for database connection
mongoose.connection.on('connected', () => {
    console.log('Connected to the database: ' +config.name);
});
// Check for database errors
mongoose.connection.on('error', (err) => {
    console.log('Database error: Can not connect to database: '+config.name + '' +err);
});

// MIDDLEWARE

// Cors
app.use(cors());

// Body parser
app.use(bodyParser.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Set users route and set it to the users variable made in the users.js file in routes
app.use('/users', users);

// Test route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Server port configuration
app.listen(port, () => {
    console.log('Server started on port: ' +port)
});