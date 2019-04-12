const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const participantSchema = new Schema(
  {
    name: String,
    lastName: String,
    atendance: { type: Boolean, default: false },
    group: { type: String },
    dish: {type: String, default: "Sin seleccionar"},
    dishObservations: String,
    bus: { type: Boolean, default: false },
    firsTime: { type: Boolean, default: true }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;
