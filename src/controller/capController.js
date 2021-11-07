const Cap = require("../model/capModel");
const factory = require("../../utility/factoryController");
const multer = require("multer");
const getPartIdmiddleware = require("../../utility/getPartId");

exports.getAllCaps = factory.getAll(Cap);
// exports.createCap = factory.createModel(Cap);
exports.getCap = factory.getModel(Cap);
exports.updateCap = factory.updateModel(Cap);
exports.deleteCap = factory.deleteModel(Cap);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/Cap");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `cap-${Date.now()}.${ext}`);
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
exports.createCap = factory.createComponent(Cap, "Cap");

//To update Component
exports.getCapId = getPartIdmiddleware.getComponentPartId(Cap);
exports.updateExitingCap = factory.updateExitingComponent(Cap, "Cap");
