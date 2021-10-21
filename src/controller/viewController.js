const { request } = require("express");
const Cores = require("./../model/coreModel");
const viewComponent = require("./viewComponentController");
const InnerFinTubes = require("./../model/innerFinTubeModel");
const OuterFins = require("./../model/outerFinModel");
const SidePlates = require("./../model/sidePlateModel");
const CupPlates = require("./../model/cupPlateModel");
const Cap = require("./../model/capModel");
const PlateHeader = require("./../model/plateHeaderModel");
const TankHeader = require("./../model/tankHeaderModel");
const Separator = require("./../model/separatorModel");
const Joint = require("./../model/jointModel");

exports.getAllCore = async (req, res, next) => {
  try {
    const cores = await Cores.find();

    res.status(200).render("cores", {
      title: "Cores",
      cores: cores,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.getCore = async (req, res, next) => {
  try {
    const core = await Cores.findOne({ slug: req.params.slug });

    res.status(200).render("product", {
      title: `Model ${core.model}`,
      core,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.createCore = async (req, res, next) => {
  try {
    // const core = await Cores.findOne({ slug: req.params.slug });

    res.status(200).render("createCore", {
      title: `Create Core`,
      //   core,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.homepage = async (req, res, next) => {
  try {
    // const core = await Cores.findOne({ slug: req.params.slug });

    res.status(200).render("home", {
      title: `Home`,
      //   core,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.getInnerFinTubes = viewComponent.getComponentPart(InnerFinTubes);
exports.getOuterFins = viewComponent.getComponentPart(OuterFins);
exports.getSidePlate = viewComponent.getComponentPart(SidePlates);
exports.getCupPlate = viewComponent.getComponentPart(CupPlates);
exports.getCap = viewComponent.getComponentPart(Cap);
exports.getPlateHeader = viewComponent.getComponentPart(PlateHeader);
exports.getTankHeader = viewComponent.getComponentPart(TankHeader);
exports.getSep = viewComponent.getComponentPart(Separator);
exports.getJoint = viewComponent.getComponentPart(Joint);
//exports.getComponent =viewComponent

exports.getAllInnerFin = viewComponent.getAllProperties(InnerFinTubes);
exports.getAllOuterFin = viewComponent.getAllProperties(OuterFins);
exports.getAllSidePlate = viewComponent.getAllProperties(SidePlates);
exports.getAllPlateHeader = viewComponent.getAllProperties(PlateHeader);
exports.getAllTankHeader = viewComponent.getAllProperties(TankHeader);
exports.getAllSeparator = viewComponent.getAllProperties(Separator);
exports.getAllCap = viewComponent.getAllProperties(Cap);
exports.getAllCupPlate = viewComponent.getAllProperties(CupPlates);
exports.getAllJoint = viewComponent.getAllProperties(Joint);
