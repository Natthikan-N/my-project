const Separator = require("../model/separatorModel");
const factory = require("../../utility/factoryController");
const multer = require("multer");
const getPartIdmiddleware = require("../../utility/getPartId");

exports.getAllSeparators = factory.getAll(Separator);
// exports.createSeparator = factory.createModel(Separator);
exports.getSeparator = factory.getModel(Separator);
exports.updateSeparator = factory.updateModel(Separator);
exports.deleteSeparator = factory.deleteModel(Separator);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/Separators");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `separators-${Date.now()}.${ext}`);
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

exports.createSeparator = factory.createComponent(Separator, "Separators");

//To update Component
exports.getSeparatorId = getPartIdmiddleware.getComponentPartId(Separator);
exports.updateExitingSeparator = factory.updateExitingComponent(
  Separator,
  "Separators"
);
