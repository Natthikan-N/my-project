const mongoose = require("mongoose");

const tankHeaderSchema = new mongoose.Schema({
  partNo: { type: String, required: [true, "Must have Part No"] },
  side: { type: String, enum: { values: ["top", "bottom"] } },
  img: { type: String, default: "/img/tankHeaders/default.jpg" },
  length: { type: Number },
  partName: { type: String, default: "Tank Header" },
});

const TankHeader = mongoose.model("TankHeader", tankHeaderSchema);
module.exports = TankHeader;
