// Required modules
const express = require('express');
const router = express.Router();

// Register route
router.get('/register', (req, res, next) => {
    res.send('Hello Register')
});

// Authenticate route
router.get('/authenticate', (req, res, next) => {
    res.send('Hello Auth')
});

// Profile route
router.get('/profile', (req, res, next) => {
    res.send('Hello profile')
});

module.exports = router;