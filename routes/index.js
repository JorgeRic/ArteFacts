'use strict';
const express = require('express');
const router = express.Router();

const Art = require('../models/Art');

router.get('/', async (req, res, next) => {
  const arts = await Art.find();
  const content = {
    title: 'Express',
    arts: arts
  };
  res.render('index', content);
});

router.post('/create-art', async (req, res, next) => {
  try {
    const { author, contact, title, artType } = req.body;
    await Art.create({
      author,
      contact,
      title,
      artType
    });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
