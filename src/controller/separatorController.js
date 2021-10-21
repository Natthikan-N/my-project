const Separator = require("../model/separatorModel");
const factory = require("../../utility/factoryController");

exports.getAllSeparators = factory.getAll(Separator);
exports.createSeparator = factory.createModel(Separator);
exports.getSeparator = factory.getModel(Separator);
exports.updateSeparator = factory.updateModel(Separator);
exports.deleteSeparator = factory.deleteModel(Separator);
