const OuterFin = require("../model/outerFinModel");
const factory = require("../../utility/factoryController");

exports.getAllOuterFins = factory.getAll(OuterFin);
exports.createOuterFin = factory.createModel(OuterFin);
exports.getOuterFin = factory.getModel(OuterFin);
exports.updateOuterFin = factory.updateModel(OuterFin);
exports.deleteOuterFin = factory.deleteModel(OuterFin);
