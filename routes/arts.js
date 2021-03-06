'use strict';

const express = require('express');
const router = express.Router();

const { isNotLoggedIn } = require('../middlewares/authMiddlewares');
const User = require('../models/User');
const Art = require('../models/Art.js');
const parser = require('../config/cloudinary');

// Create art (get the form & post the info filled)
router.get('/create-art', isNotLoggedIn, async (req, res, next) => {
  try {
    const arts = await Art.find();
    res.render('create-art', { arts });
  } catch (error) {
    next(error);
  }
});

router.post('/create-art', isNotLoggedIn, parser.single('image'), async (req, res, next) => {
  const { author, contact, title, artType } = req.body;
  const image = req.file.secure_url;
  try {
    console.log(req.body);
    const art = await Art.create({
      author,
      contact,
      title,
      artType,
      image
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

router.post('/:id/edit-art', parser.single('image'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentArt = await Art.findById(id);
    let image;
    if (req.file !== undefined) {
      image = req.file.secure_url;
    } else {
      image = currentArt.image;
    }

    const { author, contact, title, artType } = req.body;
    const update = {
      author,
      contact,
      title,
      artType,
      image
    };
    await Art.findByIdAndUpdate(id, update, { new: true });
    res.redirect('/users/profile');
  } catch (error) {
    next(error);
  }
});

router.get('/search', async (req, res, next) => {
  try {
    const artType = req.query.artType;
    const arts = await Art.find({ artType });

    const content = {
      title: 'Do art, do fact',
      subtitle: 'Artefacts, la galeria colectiva para compartir & amar el arte',
      arts
    };

    res.render('index', content);
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

// Add favorites
router.post('/:id/favorite-art', async (req, res, next) => {
  try {
    const artId = req.params.id;
    const userId = req.session.currentUser._id;

    let existe = false;
    const user = await User.findById(userId);
    const arrayOfFavourites = user.favorites;

    arrayOfFavourites.forEach((elem) => {
      console.log(elem, artId, elem === artId, elem.toString === artId);
      if (elem.toString() === artId) existe = true;
    });
    if (!existe) {
      await User.findByIdAndUpdate(userId, { $push: { favorites: artId } }, { new: true });
    }
    res.redirect('/users/profile');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Delete favorites
router.post('/:id/favorite-art/delete', async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.session.currentUser._id;

    await User.findByIdAndUpdate(userId, { $pull: { favorites: id } });
    res.redirect('/users/profile');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
