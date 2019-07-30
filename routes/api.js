// 'use strict';

// const express = require('express');
// const router = express.Router();

// const Art = require('../models/Art');
// const User = require('../models/User');

// router.post('/users/profile', async (req, res, next) => {
//   const { author, contact, title, artType } = req.body;
//   const image = req.file.secure_url;
//   try {
//     console.log(req.body);
//     const art = await Art.create({
//       author,
//       contact,
//       title,
//       artType,
//       image
//     });
//     const artId = art._id;
//     const userId = req.session.currentUser._id;
//     await User.findByIdAndUpdate(userId, { $push: { favorites: artId } });
//     res.json(art);
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;
