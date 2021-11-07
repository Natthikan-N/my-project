const TankHeader = require("../model/tankHeaderModel");
const factory = require("../../utility/factoryController");
const multer = require("multer");
const getPartIdmiddleware = require("../../utility/getPartId");

exports.getAllTankHeaders = factory.getAll(TankHeader);
// exports.createTankHeader = factory.createModel(TankHeader);
exports.getTankHeader = factory.getModel(TankHeader);
exports.updateTankHeader = factory.updateModel(TankHeader);
exports.deleteTankHeader = factory.deleteModel(TankHeader);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/tankHeaders");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `tank-header-${Date.now()}.${ext}`);
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

exports.createTankHeader = factory.createComponent(TankHeader, "tankHeaders");

//To update Component
exports.getTankHeaderId = getPartIdmiddleware.getComponentPartId(TankHeader);
exports.updateExitingTankHeader = factory.updateExitingComponent(
  TankHeader,
  "tankHeaders"
);
