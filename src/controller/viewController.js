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

    res.status(200).render("coreDetail", {
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
    const innerfintube = await InnerFinTubes.find();
    const outerfin = await OuterFins.find();
    const sideplate = await SidePlates.find();
    const plateheader = await PlateHeader.find();
    const tankheader = await TankHeader.find();
    const cupplate = await CupPlates.find();
    const joint = await Joint.find();
    const cap = await Cap.find();

    res.status(200).render("createCore", {
      title: `Create Core`,
      innerfintube,
      outerfin,
      sideplate,
      plateheader,
      tankheader,
      cupplate,
      joint,
      cap,
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
    const cores = await Cores.find();
    // const core = await Cores.findOne();

    res.status(200).render("home", {
      title: `Home`,
      cores,
      // core,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.qpointlist = async (req, res, next) => {
  try {
    const cores = await Cores.find();

    res.status(200).render("qPointList", {
      title: `Q-Point List`,
      cores,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.updateqpointlist = async (req, res, next) => {
  try {
    const core = await Cores.findById(req.params.id);

    res.status(200).render("updateQPoint", {
      title: `update q-point list`,
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

exports.updatecore = async (req, res, next) => {
  try {
    const core = await Cores.findById(req.params.id);
    const innerfintube = await InnerFinTubes.find();
    const outerfin = await OuterFins.find();
    const sideplate = await SidePlates.find();
    const plateheader = await PlateHeader.find();
    const tankheader = await TankHeader.find();
    const cupplate = await CupPlates.find();
    const joint = await Joint.find();
    const cap = await Cap.find();

    res.status(200).render("updateCore", {
      title: `Create Core`,
      core,
      innerfintube,
      outerfin,
      sideplate,
      plateheader,
      tankheader,
      cupplate,
      joint,
      cap,
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
