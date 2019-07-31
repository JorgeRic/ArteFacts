'use strict';
const express = require('express');
const router = express.Router();

const Art = require('../models/Art');

router.get('/', async (req, res, next) => {
  const arts = await Art.find();
  const content = {
    title: 'Do art, do fact',
    subtitle: 'Bienvenidas a artefacts, una galeria colectiva para compartir & amar el arte',
    arts
  };
  res.render('index', content);
});

module.exports = router;
