const TankHeader = require("../model/tankHeaderModel");
const factory = require("../../utility/factoryController");

exports.getAllTankHeaders = factory.getAll(TankHeader);
exports.createTankHeader = factory.createModel(TankHeader);
exports.getTankHeader = factory.getModel(TankHeader);
exports.updateTankHeader = factory.updateModel(TankHeader);
exports.deleteTankHeader = factory.deleteModel(TankHeader);
