const mongoose = require("mongoose");
const slugify = require("slugify");
// const InnerFinTube = require("./innerFinTubeModel");

const coreSchema = new mongoose.Schema({
  model: {
    type: String,
    // required: [true, "Must have model name"],
    // unique: true,
  },
  partNo: {
    type: String,
    // required: [true, "Must have part no."],
    // unique: true,
  },
  innerfintubes: {
    name: { type: String, default: "Inner Fin Tube" },
    detail: { type: mongoose.Schema.ObjectId, ref: "InnerFinTube" },
    amount: { type: Number },
  },

  outerfins: {
    name: { type: String, default: "Outer Fin" },
    detail: { type: mongoose.Schema.ObjectId, ref: "OuterFin" },
    amount: { type: Number },
  },

  sideplates: {
    name: { type: String, default: "Side Plate" },
    parts: [
      {
        detail: { type: mongoose.Schema.ObjectId, ref: "SidePlate" },
        amount: { type: Number, default: 1 },
      },
    ],
  },

  cupplates: {
    name: { type: String, default: "Cup Plate" },
    parts: [
      {
        detail: { type: mongoose.Schema.ObjectId, ref: "CupPlate" },
        amount: { type: Number, default: 1 },
      },
    ],
  },

  plateheaders: {
    name: { type: String, default: "Plate Header" },
    parts: [
      {
        detail: { type: mongoose.Schema.ObjectId, ref: "PlateHeader" },
        amount: { type: Number, default: 1 },
      },
    ],
  },

  tankheaders: {
    name: { type: String, default: "Tank Header" },
    parts: [
      {
        detail: { type: mongoose.Schema.ObjectId, ref: "TankHeader" },
        amount: { type: Number, default: 1 },
      },
    ],
  },

  separators: {
    name: { type: String, default: "Separator" },
    parts: [
      {
        detail: { type: mongoose.Schema.ObjectId, ref: "Separator" },
        amount: { type: Number },
      },
    ],
  },

  cap: {
    name: { type: String, default: "Cap" },
    detail: { type: mongoose.Schema.ObjectId, ref: "Cap" },
    amount: { type: Number, default: 3 },
  },
  joint: {
    name: { type: String, default: "Joint" },
    detail: { type: mongoose.Schema.ObjectId, ref: "Joint" },
    amount: { type: Number, default: 1 },
  },

  coreProperties: {
    type: Object,
    coreWidth: { type: Number, default: 0 },
    coreHeight: { type: Number, default: 0 },
    coreArea: { type: Number },
    qrCode: { type: String },
    kanbanColor: {
      type: String,
      // required: [true, "Must have QR-Code picture"],
    },
  }, //properties

  img: { type: String, default: "/img/Cores/default.jpg" },
  slug: String,
  qpoint: {
    img: { type: String, default: "/img/Q-point/default.jpg" },
    issue: { type: String, default: "" },
  },
});

// coreSchema.pre('save',function(next){
//   this.slug = slugify(this.name,{lower:true});
//   next();
// })

coreSchema.pre(/^find/, function (next) {
  this.populate({
    path: "innerfintubes",
    populate: { path: "detail" },
  })
    .populate({
      path: "outerfins",
      populate: { path: "detail" },
    })
    .populate({
      path: "sideplates",
      populate: { path: "parts", populate: "detail" },
    })
    .populate({
      path: "cupplates",
      populate: { path: "parts", populate: "detail" },
    })
    .populate({
      path: "plateheaders",
      populate: { path: "parts", populate: "detail" },
    })
    .populate({
      path: "tankheaders",
      populate: { path: "parts", populate: "detail" },
    })
    .populate({
      path: "separators",
      populate: { path: "parts", populate: "detail" },
    })
    .populate({
      path: "cap",
      populate: { path: "detail" },
    })
    .populate({
      path: "joint",
      populate: { path: "detail" },
    });
  next();
});

const Core = mongoose.model("Core", coreSchema);
module.exports = Core;
