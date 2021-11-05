const express = require("express");
const router = express.Router();
const coreController = require("../controller/coreController");

router
  .route("/updateqpoint")
  .patch(
    coreController.uploadQpointImage,
    coreController.getCoreId,
    coreController.updateQPoint
  );

router
  .route("/updatecore")
  .patch(
    coreController.uploadCoreImage,
    coreController.getCoreIdId,
    coreController.getInnerfinId,
    coreController.getOuterfinId,
    coreController.getCapId,
    coreController.getJointId,
    coreController.getSideplateId,
    coreController.getPlateHeaderId,
    coreController.getTankHeaderId,
    coreController.getCupPlateId,
    coreController.getSeparatorId,
    coreController.updateCoreAPI
  );

router.route(`/`).get(coreController.getAllCores).post(
  coreController.uploadCoreImage,
  // coreController.resizeUserPhoto,
  coreController.getInnerfinId,
  coreController.getOuterfinId,
  coreController.getCapId,
  coreController.getJointId,
  coreController.getSideplateId,
  coreController.getPlateHeaderId,
  coreController.getTankHeaderId,
  coreController.getCupPlateId,
  coreController.getSeparatorId,
  coreController.createCore
);

router
  .route("/:id")
  .get(coreController.getCore)
  .patch(coreController.updateCore)
  .delete(coreController.deleteCore);

module.exports = router;
