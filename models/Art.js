
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const arteSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  artType: {
    type: String,
    enum: ['Pintura', 'Fotografía', 'Escultura', 'Ilustración', 'Collage'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://unsplash.com/photos/fmWUC1gaDv8'
  }
}, {
  timestamps: true
});

const Art = mongoose.model('Art', arteSchema);

module.exports = Art;
