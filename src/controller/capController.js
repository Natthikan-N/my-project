const Cap = require("../model/capModel");
const factory = require("../../utility/factoryController");

exports.getAllCaps = factory.getAll(Cap);
exports.createCap = factory.createModel(Cap);
exports.getCap = factory.getModel(Cap);
exports.updateCap = factory.updateModel(Cap);
exports.deleteCap = factory.deleteModel(Cap);
