const express = require("express");
const router = express.Router();
const viewController = require("../controller/viewController");
const viewComponentController = require("../controller/viewComponentController");

router.route("/coredetail").get(viewController.getAllCore);

router.route("/core/:slug").get(viewController.getCore);

router.route("/innerfintube").get(viewController.getAllInnerFin);
router.route("/innerfintube/:id").get(viewController.getInnerFinTubes);

router.route("/outerfin").get(viewController.getAllOuterFin);
router.route("/outerfin/:id").get(viewController.getOuterFins);

router.route("/sideplate").get(viewController.getAllSidePlate);
router.route("/sideplate/:id").get(viewController.getSidePlate);

router.route("/cupplate").get(viewController.getAllCupPlate);
router.route("/cupplate/:id").get(viewController.getCupPlate);

router.route("/cap").get(viewController.getAllCap);
router.route("/cap/:id").get(viewController.getCap);

router.route("/plateheader").get(viewController.getAllPlateHeader);
router.route("/plateheader/:id").get(viewController.getPlateHeader);

router.route("/tankheader").get(viewController.getAllTankHeader);
router.route("/tankheader/:id").get(viewController.getTankHeader);

router.route("/separator").get(viewController.getAllSeparator);
router.route("/separator/:id").get(viewController.getSep);

router.route("/joint").get(viewController.getAllJoint);
router.route("/joint/:id").get(viewController.getJoint);

router.route("/createcore").get(viewController.createCore);
router.route("/").get(viewController.homepage);

router.route("/qpointlist").get(viewController.qpointlist);
router.route("/updateqpoint/:id").get(viewController.updateqpointlist);

router.route("/updatecore/:id").get(viewController.updatecore);

module.exports = router;
