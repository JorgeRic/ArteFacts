'use strict';
const express = require('express');
const router = express.Router();

const Art = require('../models/Art');

router.get('/', async (req, res, next) => {
  const arts = await Art.find();
  const content = {
    title: 'Express',
    arts
  };
  res.render('index', content);
});

module.exports = router;
