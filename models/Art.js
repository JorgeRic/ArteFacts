
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
    default: 'http://www.hollywoodprimaryschool.co.uk/wp-content/uploads/3402463-KNVHBTVS-7.jpg'
  }
}, {
  timestamps: true
});

const Art = mongoose.model('Art', arteSchema);

module.exports = Art;
