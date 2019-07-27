'use strict';

const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const { isLoggedIn, isNotLoggedIn, isFormFilled } = require('../middlewares/authMiddlewares');
const saltRounds = 10;
const router = express.Router();

router.get('/signup', isLoggedIn, (req, res, next) => {
  const data = {
    messages: req.flash('errorFormNotFilled'),
    formData: req.flash('errorDataForm')
  };
  res.render('signup', data);
});

router.post('/signup', isLoggedIn, isFormFilled, async (req, res, next) => {
  const { username, password } = req.body;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.redirect('/auth/signup');
    }
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

router.get('/login', isLoggedIn, (req, res, next) => {
  const data = {
    messages: req.flash('errorFormNotFilled'),
    formData: req.flash('errorDataForm')
  };
  res.render('login', data);
});

router.post('/login', isLoggedIn, isFormFilled, async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.redirect('/auth/login');
    }
    if (bcrypt.compareSync(password, user.password)) {
      req.session.currentUser = user;
      res.redirect('/');
    } else {
      res.redirect('/auth/login');
    }
  } catch (error) {
    next(error);
  }
});

router.post('/logout', isNotLoggedIn, (req, res, next) => {
  delete req.session.currentUser;
  return res.redirect('/');
});

module.exports = router;
