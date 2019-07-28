'use strict';

const express = require('express');
const router = express.Router();

const Art = require('../models/Art.js');

router.get('/create-art', async (req, res, next) => {
  try {
    const arts = await Art.find();
    res.render('create-art', { arts });
  } catch (error) {
    next(error);
  }
});

router.post('/create-art', async (req, res, next) => {
  try {
    const { author, contact, title, artType } = req.body;
    console.log(req.body);
    await Art.create({
      author,
      contact,
      title,
      artType
    });
    res.redirect('/users/profile');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
