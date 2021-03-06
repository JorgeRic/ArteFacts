'use strict';

const isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect('/');
  }
  next();
};
const isNotLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/');
  }
  next();
};
const isFormFilled = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    req.flash('errorFormNotFilled', 'All the fields are required');
    if (username) {
      req.flash('errorDataForm', username);
    }
    if (password) {
      req.flash('errorDataForm', password);
    }
    return res.redirect(req.originalUrl);
  }
  next();
};
module.exports = {
  isLoggedIn,
  isNotLoggedIn,
  isFormFilled
};
