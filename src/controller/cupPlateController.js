const CupPlate = require("../model/cupPlateModel");
const factory = require("../../utility/factoryController");

exports.getAllCupPlates = factory.getAll(CupPlate);
exports.createCupPlate = factory.createModel(CupPlate);
exports.getCupPlate = factory.getModel(CupPlate);
exports.updateCupPlate = factory.updateModel(CupPlate);
exports.deleteCupPlate = factory.deleteModel(CupPlate);
