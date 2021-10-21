const PlateHeader = require("../model/plateHeaderModel");
const factory = require("../../utility/factoryController");

exports.getAllPlateHeaders = factory.getAll(PlateHeader);
exports.createPlateHeader = factory.createModel(PlateHeader);
exports.getPlateHeader = factory.getModel(PlateHeader);
exports.updatePlateHeader = factory.updateModel(PlateHeader);
exports.deletePlateHeader = factory.deleteModel(PlateHeader);
