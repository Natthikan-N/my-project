const Joint = require("../model/jointModel");
const factory = require("./../../utility/factoryController");
const multer = require("multer");
const getPartIdmiddleware = require("../../utility/getPartId");

exports.getAllJoints = factory.getAll(Joint);
// exports.createJoint = factory.createModel(Joint);
exports.getJoint = factory.getModel(Joint);
exports.updateJoint = factory.updateModel(Joint);
exports.deleteJoint = factory.deleteModel(Joint);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/Joints");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `joint-${Date.now()}.${ext}`);
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

exports.createJoint = factory.createComponent(Joint, "Joints");

//To update Component
exports.getJointId = getPartIdmiddleware.getComponentPartId(Joint);
exports.updateExitingJoint = factory.updateExitingComponent(Joint, "Joints");
