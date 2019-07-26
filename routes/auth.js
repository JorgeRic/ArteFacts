'use strict';

const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const saltRounds = 10;
const router = express.Router();

/* GET home page. */
router.get('/signup', (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect('/');
  }
  res.render('signup');
});

router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const newUser = await User.create({
      username,
      password: hashedPassword
    });
    req.session.currentUser = newUser;
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
