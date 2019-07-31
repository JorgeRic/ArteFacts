'use strict';
const express = require('express');
const router = express.Router();
const { isNotLoggedIn } = require('../middlewares/authMiddlewares');
const User = require('../models/User');

/* GET users listing w/their arrays. */
router.get('/profile', isNotLoggedIn, async (req, res, next) => {
  const userId = req.session.currentUser._id;
  const userArts = await User.findById(userId).populate('arts');
  const userFavorites = await User.findById(userId).populate('favorites');
  res.render('profile', { userArts, userFavorites });
});

module.exports = router;
