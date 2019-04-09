const passport = require('passport');
const User = require('../models/User');
const  Participants = require('../models/Participant');

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findOne({_id: userIdFromSession})
  .populate("participants")
  .then(userDocument => {
    cb(null, userDocument);
  })
  .catch(err => {
    cb(err);
  })
});
