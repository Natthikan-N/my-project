const SidePlate = require("../model/sidePlateModel");
const factory = require("../../utility/factoryController");

exports.getAllSidePlates = factory.getAll(SidePlate);
exports.createSidePlate = factory.createModel(SidePlate);
exports.getSidePlate = factory.getModel(SidePlate);
exports.updateSidePlate = factory.updateModel(SidePlate);
exports.deleteSidePlate = factory.deleteModel(SidePlate);
