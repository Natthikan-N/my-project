const OuterFin = require("../model/outerFinModel");
const factory = require("../../utility/factoryController");
const multer = require("multer");
const getPartIdmiddleware = require("../../utility/getPartId");

exports.getAllOuterFins = factory.getAll(OuterFin);
// exports.createOuterFin = factory.createModel(OuterFin);
exports.getOuterFin = factory.getModel(OuterFin);
exports.updateOuterFin = factory.updateModel(OuterFin);
exports.deleteOuterFin = factory.deleteModel(OuterFin);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/OuterFins");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `outer-fin-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    control.log(err);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadImage = upload.single("componentImg");

//To Create Component
//(model component , fileFolder)
exports.createOuterFin = factory.createComponent(OuterFin, "outerFins");

//To Update Component
exports.getOuterFinId = getPartIdmiddleware.getComponentPartId(OuterFin);
exports.updateExitingOuterFin = factory.updateExitingComponent(
  OuterFin,
  "OuterFins"
);
