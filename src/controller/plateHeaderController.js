const PlateHeader = require("../model/plateHeaderModel");
const factory = require("../../utility/factoryController");
const multer = require("multer");
const getPartIdmiddleware = require("../../utility/getPartId");

exports.getAllPlateHeaders = factory.getAll(PlateHeader);
// exports.createPlateHeader = factory.createModel(PlateHeader);
exports.getPlateHeader = factory.getModel(PlateHeader);
exports.updatePlateHeader = factory.updateModel(PlateHeader);
exports.deletePlateHeader = factory.deleteModel(PlateHeader);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/plateHeaders");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `plate-header-${Date.now()}.${ext}`);
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

exports.createPlateHeader = factory.createComponent(
  PlateHeader,
  "plateHeaders"
);

//To update Component
exports.getPlateHeaderId = getPartIdmiddleware.getComponentPartId(PlateHeader);
exports.updateExitingPlateHeader = factory.updateExitingComponent(
  PlateHeader,
  "plateHeaders"
);
