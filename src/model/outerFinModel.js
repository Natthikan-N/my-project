const mongoose = require("mongoose");

const outerFinSchema = new mongoose.Schema({
  partNo: { type: String, required: [true, "Must have Part No"] },
  // properties : {
  //   slit: { type: String, enum: { values: ["6.2", "No"] } },
  // pitch: { type: Number, enum: { values: [2.6, 3.0, 3.4] } },
  // wave: { type: Number, required: [true, "Must have wave amount"] },
  // lenght: { type: Number, require: [true, "Must have wave amount"] },

  // },
  slit: { type: String, enum: { values: ["6.2", "no"] } },
  pitch: { type: Number }, // enum: { values: [2.6, 3.0, 3.4] } },
  wave: { type: Number, required: [true, "Must have wave amount"] },
  length: { type: Number, require: [true, "Must have wave amount"] },
  qrCord: { type: String, default: "" },
  partName: { type: String, default: "Outer Fin" },
  img: { type: String, defaule: "" },
});

const OuterFin = mongoose.model("OuterFin", outerFinSchema);
module.exports = OuterFin;
