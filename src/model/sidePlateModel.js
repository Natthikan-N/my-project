const mongoose = require("mongoose");

const sidePlateSchema = new mongoose.Schema({
  partNo: { type: String, required: [true, "Must have Part No"] },
  side: { type: String, enum: { values: ["joint", "turn"] } },
  partName: { type: String, default: "Side Plate" },
  length: { type: Number },
  img: { type: String, default: "/img/sidePlates/default.jpg" },
});

const SidePlate = mongoose.model("SidePlate", sidePlateSchema);
module.exports = SidePlate;
