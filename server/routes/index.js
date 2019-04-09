const express = require("express");
const router = express.Router();
const Participant = require("../models/Participant");

/* GET home page */


router.post("/updateForm", (req, res, next) => {
  console.log(req.body.user);
  req.body.user.participants.forEach(participant => {
    Participant.findByIdAndUpdate(participant._id, {
      atendance: participant.atendance,
      bus: participant.bus,
      dish: participant.dish,
      firsTime: false
    })
      .then(() => console.log("todo ok"))
      .catch(e => console.log(e));
  });
});

module.exports = router;
