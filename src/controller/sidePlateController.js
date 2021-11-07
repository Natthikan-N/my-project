const SidePlate = require("../model/sidePlateModel");
const factory = require("../../utility/factoryController");
const multer = require("multer");
const getPartIdmiddleware = require("../../utility/getPartId");

exports.getAllSidePlates = factory.getAll(SidePlate);
// exports.createSidePlate = factory.createModel(SidePlate);
exports.getSidePlate = factory.getModel(SidePlate);
exports.updateSidePlate = factory.updateModel(SidePlate);
exports.deleteSidePlate = factory.deleteModel(SidePlate);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/sidePlates");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `side-plate-${Date.now()}.${ext}`);
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

//To Create New Component
exports.createSidePlate = factory.createComponent(SidePlate, "sidePlates");

//To update Component
exports.getSidePlateId = getPartIdmiddleware.getComponentPartId(SidePlate);
exports.updateExitingSidePlate = factory.updateExitingComponent(
  SidePlate,
  "sidePlates"
);
