// Required modules
const express  = require('express');
const router   = express.Router();
const passport = require('passport');
const jwt      = require('jsonwebtoken')


// Import user model for the register route
const User = require('../models/user');

// Register route
router.post('/register', (req, res, next) => {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email:     req.body.email,
        username:  req.body.username,
        password:  req.body.password
    });

    User.addUser(newUser, (err, user) => {
       // Check for error on adding user
        if (err) {
            res.json({
                success: false,
                message: 'Failed to register user'
            });
            // If user is created
        } else {
            res.json({
                success: true,
                message: 'User registered successfully'
            });
        }
    });
});

// Authenticate route
router.post('/authenticate', (req, res, next) => {
    res.send('Hello Auth')
});

// Profile route
router.get('/profile', (req, res, next) => {
    res.send('Hello profile')
});

module.exports = router;