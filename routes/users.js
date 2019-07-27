'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/profile', (req, res, next) => {
  res.render('profile');
});

module.exports = router;
