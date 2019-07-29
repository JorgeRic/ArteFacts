'use strict';

const express = require('express');
const router = express.Router();

const { isNotLoggedIn } = require('../middlewares/authMiddlewares');
const User = require('../models/User');
const Art = require('../models/Art.js');

router.get('/create-art', isNotLoggedIn, async (req, res, next) => {
  try {
    const arts = await Art.find();
    res.render('create-art', { arts });
  } catch (error) {
    next(error);
  }
});

router.post('/create-art', isNotLoggedIn, async (req, res, next) => {
  const { author, contact, title, artType } = req.body;
  try {
    console.log(req.body);
    const art = await Art.create({
      author,
      contact,
      title,
      artType
    });
    const artId = art._id;
    const userId = req.session.currentUser._id;
    await User.findByIdAndUpdate(userId, { $push: { arts: artId } });
    res.redirect('/users/profile');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
