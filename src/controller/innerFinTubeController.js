const InnerFinTube = require("../model/innerFinTubeModel");
const factory = require("./../../utility/factoryController");
const multer = require("multer");
const getPartIdmiddleware = require("../../utility/getPartId");

exports.getAllInnerFinTubes = factory.getAll(InnerFinTube);
// exports.createInnerFinTube = factory.createModel(InnerFinTube);
exports.getInnerFinTube = factory.getModel(InnerFinTube);
exports.updateInnerFinTube = factory.updateModel(InnerFinTube);
exports.deleteInnerFinTube = factory.deleteModel(InnerFinTube);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/innerFinTubes");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `inner-fin-tube-${Date.now()}.${ext}`);
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

exports.createInnerFinTube = factory.createComponent(
  InnerFinTube,
  "innerFinTubes"
);

exports.getInnerfinId = getPartIdmiddleware.getComponentPartId(InnerFinTube);

exports.updateExitingInnerFinTube = factory.updateExitingComponent(
  InnerFinTube,
  "innerFinTubes"
);
