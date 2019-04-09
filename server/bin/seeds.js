// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Participant = require("../models/Participant");
const Event = require("../models/Event");

const bcryptSalt = 10;

mongoose
  .connect(`mongodb://admin:Ayc.051213@ds047524.mlab.com:47524/wedding`, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let usuarios = [{
  username: "ana&rafa",
  password: bcrypt.hashSync("a&c", bcrypt.genSaltSync(bcryptSalt))
},
{
  username: "xavi&tam",
  password: bcrypt.hashSync("a&c", bcrypt.genSaltSync(bcryptSalt))
}];

let participants = [
  {
    name: "Rafael",
    lastName: "Salas"
  },
  {
    name: "Ana",
    lastName: "Salas"
  },
  {
    name: "Xavi",
    lastName: "Coll"
  },
  {
    name: "Tamara",
    lastName: "Colo"
  }
];

let event = {
  name: "Boda de Alberto & Carol",
  description: "La boda del año"
};

// Participant.deleteMany()
Participant.deleteMany()
  .then(event => {
    return Participant.insertMany(participants);
  })
  .then(participants => {
    return User.insertMany(usuarios);
  })
  .then(() => mongoose.disconnect());
// .catch(err => {
//   mongoose.disconnect();
//   throw err;
// });
