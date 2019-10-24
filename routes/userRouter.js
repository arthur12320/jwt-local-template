const express = require('express');
const router = express.Router();
const passport = require('passport');

require('../passport');
const { signUp, logIn, getData, updateData } = require('../controller/userController');

const passportLocal = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

// routes based on /users

router.post('/signup', signUp);

router.post('/login', passportLocal, logIn);

router.get('/data', passportJWT, getData);

router.put('/data', passportJWT, updateData);


module.exports = router;