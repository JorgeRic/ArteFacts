'use strict';

const express = require('express');
const router = express.Router();

const { isNotLoggedIn } = require('../middlewares/authMiddlewares');
const User = require('../models/User');
const Art = require('../models/Art.js');

// Create art (get the form & post the info filled)
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

// Edit art (get data from ddbb, post new data filled)
router.get('/:id/edit-art', async (req, res, next) => {
  try {
    const { id } = req.params;
    const art = await Art.findById(id);
    res.render('edit-art', art);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/edit-art', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { author, contact, title, artType } = req.body;
    const update = {
      author,
      contact,
      title,
      artType
    };
    await Art.findByIdAndUpdate(id, update, { new: true });
    res.redirect('/users/profile');
  } catch (error) {
    next(error);
  }
});

// Delete art
router.post('/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Art.findByIdAndRemove(id);
    res.redirect('/users/profile');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
