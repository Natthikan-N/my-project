const Joint = require("../model/jointModel");
const factory = require("./../../utility/factoryController");

exports.getAllJoints = factory.getAll(Joint);
exports.createJoint = factory.createModel(Joint);
exports.getJoint = factory.getModel(Joint);
exports.updateJoint = factory.updateModel(Joint);
exports.deleteJoint = factory.deleteModel(Joint);

