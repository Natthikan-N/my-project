const mongoose = require("mongoose");

const plateHeaderSchema = new mongoose.Schema({
  partNo: { type: String, required: [true, "Must have Part No"] },
  side: { type: String, enum: { values: ["top", "bottom"] } },
  img: { type: String, default: "/img/plateHeaders/default.jpg" },
  length: { type: Number },
  partName: { type: String, default: "Plate Header" },
});

const PlateHeader = mongoose.model("PlateHeader", plateHeaderSchema);
module.exports = PlateHeader;
