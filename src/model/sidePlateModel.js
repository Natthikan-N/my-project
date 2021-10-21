const mongoose = require("mongoose");

const sidePlateSchema = new mongoose.Schema({
  partNo: { type: String, required: [true, "Must have Part No"] },
  side: { type: String, enum: { values: ["joint", "turn"] } },
  partName: { type: String, default: "Side Plate" },
  img: { type: String, default: "" },
});

const SidePlate = mongoose.model("SidePlate", sidePlateSchema);
module.exports = SidePlate;
