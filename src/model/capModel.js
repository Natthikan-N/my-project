const mongoose = require("mongoose");

const capSchema = new mongoose.Schema({
  partNo: { type: String, required: [true, "Must have Part No"] },
  img: String,
  partName: String,
});

const Cap = mongoose.model("Cap", capSchema);
module.exports = Cap;
