const InnerFinTube = require("../model/innerFinTubeModel");
const factory = require("./../../utility/factoryController");

exports.getAllInnerFinTubes = factory.getAll(InnerFinTube);
exports.createInnerFinTube = factory.createModel(InnerFinTube);
exports.getInnerFinTube = factory.getModel(InnerFinTube);
exports.updateInnerFinTube = factory.updateModel(InnerFinTube);
exports.deleteInnerFinTube = factory.deleteModel(InnerFinTube);
