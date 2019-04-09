const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/User');
const  Participants = require('../models/Participant');
const bcrypt        = require('bcrypt');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, 
  (username, password, done) => {
    User.findOne({ username })
    .populate("participants")
    .then(foundUser => {
      if (!foundUser) {
        done(null, false, { message: 'Nombre de usuario incorrecto' });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        done(null, false, { message: 'Password incorrecto' });
        return;
      }

      done(null, foundUser);
    })
    .catch(err => done(err));
  }
));
