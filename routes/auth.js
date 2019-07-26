'use strict';

const express = require('express');
const User = require('../models/User');

const router = express.Router();

/* GET home page. */
router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    await User.create({
      username,
      password
    });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});
/*
router.get('/login', (req, res, next) => {
  res.redirect('index', { title: 'login' });
});
router.post('/login', (req, res, next) => {
  res.redirect('index', { title: 'login' });
});
router.post('/logout', (req, res, next) => {
  res.redirect('index', { title: 'logout' });
});
*/
module.exports = router;
