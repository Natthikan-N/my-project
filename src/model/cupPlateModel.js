const mongoose = require("mongoose");

const cupPlateSchema = new mongoose.Schema({
  partNo: { type: String, required: [true, "Must have Part No"] },
  side: { type: String /*, enum: { values: ["lower", "upper"] }*/ },
  partName: { type: String, default: "Cup Plate" },
  img: { type: String, default: "" },
  // partName: String,
});

const CupPlate = mongoose.model("CupPlate", cupPlateSchema);
module.exports = CupPlate;
