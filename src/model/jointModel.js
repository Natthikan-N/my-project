const mongoose = require("mongoose");

const jointSchema = new mongoose.Schema({
  partNo: { type: String, required: [true, "Must have Part No"] },
  type: { type: String, required: [true, "Must have Part No"] },
  img: String,
  partName: String,
});

const Joint = mongoose.model("Joint", jointSchema);
module.exports = Joint;
