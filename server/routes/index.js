const express = require("express");
const router = express.Router();
const Participant = require("../models/Participant");
const nodemailer = require("nodemailer");
/* GET home page */




function runUpdate(obj) {
  return new Promise((resolve, reject) => {
    Participant.findByIdAndUpdate(obj._id, {
        atendance: obj.atendance,
        bus: obj.bus,
        dish: obj.dish,
        firsTime: false
      })
      .then(result => resolve(result))
      .catch(err => reject(err))
  });
}

router.post("/updateForm", (req, res, next) => {
  let promiseArr = []; 
  req.body.user.participants.forEach(participant => {
    promiseArr.push(runUpdate(participant))
  });

  Promise.all(promiseArr)
  .then((res) => {
    console.log(res)
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "albertosolpal@gmail.com",
        pass: "Ayc.051213"
      }
    });
  transporter.sendMail({
      from: "ACTUALIZACIÓN PARTICIPANTE BODA 💍",
      to: "albertosolpal@gmail.com, carolinabaudes@gmail.com", 
      subject: `${res[0].group} han modificado su participacion!`, 
      text: "",
      html: `
      <html>
      ${res.map(particpante => `
      <p>    Participante    |        Asitencia         |          Bus       |        Plato       </p>
      <p>${particpante.name} | ${particpante.atendance} | ${particpante.bus} | ${particpante.dish}</p>
      `)}
      </html>`
    })
    .then(info => res.status(200).json(info))
    .catch(error => res.status(500).json(error));
    mongoose.disconnect()
  })
  .catch(err => console.log(err))
});

module.exports = router;
