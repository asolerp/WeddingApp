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
  .connect(`mongodb://localhost/weddingapp`, {
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
    lastName: "Salas",
    group: "ana&rafa"
  },
  {
    name: "Ana",
    lastName: "Salas",
    group: "ana&rafa"
  },
  {
    name: "Xavi",
    lastName: "Coll",
    group: "xavi&tam"

  },
  {
    name: "Tamara",
    lastName: "Colo",
    group: "xavi&tam"
  }
];

let event = {
  name: "Boda de Alberto & Carol",
  description: "La boda del año"
};

// Participant.deleteMany()
// Participant.deleteMany()
//   .then(event => {
//     return Participant.insertMany(participants);
//   })
//   .then(participants => {
//     return User.insertMany(usuarios);
//   })
//   .then(() => mongoose.disconnect());
// // .catch(err => {
// //   mongoose.disconnect();
// //   throw err;
// // });

let promiseArr = [];

function runUpdate(obj1, obj2) {
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate({ _id: obj1._id }, { $push: {participants: obj2._id  }}, { upsert: true })
      .then(result => resolve())
      .catch(err => reject(err))
  });
}



Participant.deleteMany()
  .then(() => {
    return User.insertMany(usuarios);
  })
  .then(users => {
    return Participant.insertMany(participants)
      .then(participants => {
        participants.forEach(participant =>
          users.forEach(user =>
            (participant.group === user.username) &&
            promiseArr.push(runUpdate(user, participant))
          )
        )
      })
  })
  .then(() => {
    Promise.all(promiseArr)
      .then((res) => {
        console.log(res);
        mongoose.disconnect()
      })
      .catch(err => console.log(err))
  });