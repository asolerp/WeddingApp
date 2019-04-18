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
      }, {new: true})
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
      from: '"ACTUALIZACIÓN PARTICIPANTE BODA 💍" <a&c@nosvamosdeboda.com>',
      to: "albertosolpal@gmail.com, carolinabaudes@gmail.com", 
      subject: `${res[0].group} han modificado su participacion!`, 
      text: "Hola",
      html: `
      <html>
    
      <table>
        <tr>
          <th>Participantes</th>
          <th>Asistencia</th> 
          <th>Bus</th>
          <th>Plato</th>
        </tr>
        ${res.map(particpante => {
          return (`
          <tr>
            <td>${particpante.name}</td>
            <td>${particpante.atendance ? "Sí" : "No"}</td> 
            <td>${particpante.bus ? "Sí" : "No" }</td>
            <td>${particpante.dish}</td>
          </tr>
          `)
        })}     
      </table>
      </html>`
    })
    .then(info => res.status(200).json(info))
    .catch(error => res.status(500).json(error));
    mongoose.disconnect()
  })
  .catch(err => console.log(err))
});

module.exports = router;
