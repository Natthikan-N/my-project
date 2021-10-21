const mongoose = require("mongoose");

const sepSchema = new mongoose.Schema({
  img: String,
  partName: String,
  partNo: { type: String, required: [true, "Must have Part No"] },
  func: {
    type: String,
    enum: {
      values: ["partition", "In1", "In2", "In3", "Out1", "Out2", "Out3"],
    },
  },
});

const Separator = mongoose.model("Separator", sepSchema);
module.exports = Separator;
