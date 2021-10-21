const mongoose = require("mongoose");

const innerFinTubeSchema = new mongoose.Schema({
  partNo: { type: String, required: [true, "Must have Part No"] },
  length: { type: Number, required: [true, "Must have Part No"] },
  partName: { type: String, default: "Inner Fin Tube" },
  img: { type: String, default: "" },
});

const InnerFinTube = mongoose.model("InnerFinTube", innerFinTubeSchema);
module.exports = InnerFinTube;
