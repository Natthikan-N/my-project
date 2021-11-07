const CupPlate = require("../model/cupPlateModel");
const factory = require("../../utility/factoryController");
const multer = require("multer");
const getPartIdmiddleware = require("../../utility/getPartId");

exports.getAllCupPlates = factory.getAll(CupPlate);
// exports.createCupPlate = factory.createModel(CupPlate);
exports.getCupPlate = factory.getModel(CupPlate);
exports.updateCupPlate = factory.updateModel(CupPlate);
exports.deleteCupPlate = factory.deleteModel(CupPlate);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/cupPlates");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `cup-plate-${Date.now()}.${ext}`);
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
exports.createCupPlate = factory.createComponent(CupPlate, "cupPlates");

//To update Component
exports.getCupPlateId = getPartIdmiddleware.getComponentPartId(CupPlate);
exports.updateExitingCupPlate = factory.updateExitingComponent(
  CupPlate,
  "cupPlates"
);
