'use strict';
const express = require('express');
const router = express.Router();
const { isNotLoggedIn } = require('../middlewares/authMiddlewares');
const User = require('../models/User');

/* GET users listing. */
router.get('/profile', isNotLoggedIn, async (req, res, next) => {
  const userId = req.session.currentUser._id;
  const user = await User.findById(userId).populate('arts');
  console.log(user);
  res.render('profile', user);
});

module.exports = router;
