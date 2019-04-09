const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const Event = require('../models/Event');
const  Participant = require('../models/Participant');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      console.log(failureDetails);
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      res.status(200).json(theUser);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

  if (password.length < 7) {
    res
      .status(400)
      .json({
        message:
          "Please make your password at least 8 characters long for security purposes."
      });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashPass
    });

    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }

      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        res.status(200).json(aNewUser);
      });
    });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});


router.post("/participants",  (req, res) => {
  console.log(req.body.id)
   User.findById(req.body.id)
   .populate("participants")
   .then(user => console.log(user))
   .catch(console.log)
})

router.get("/getAllParticipants", (req, res) => {
  console.log("hola")
  Participant.find()
  .then(participants =>{
    res.status(200).json(participants)
  })
  .catch(e => res.status(500).json({message: "Get all users failed"}))
})


router.get("/getAllUsers", (req, res) => {
  console.log("hola")
  User.find()
  .populate("participants")
  .then(users =>{
    console.log(users)
    res.status(200).json(users)
  })
  .catch(e => res.status(500).json({message: "Get all users failed"}))
})

module.exports = router;
