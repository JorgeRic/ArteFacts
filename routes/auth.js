'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/signup', (req, res, next) => {
  res.render('signup');
});
router.post('/signup', (req, res, next) => {
  res.redirect('index', { title: 'Express' });
});
router.get('/login', (req, res, next) => {
  res.redirect('index', { title: 'Express' });
});
router.post('/login', (req, res, next) => {
  res.redirect('index', { title: 'Express' });
});
router.post('/logout', (req, res, next) => {
  res.redirect('index', { title: 'Express' });
});

module.exports = router;
