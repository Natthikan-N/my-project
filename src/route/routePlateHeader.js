const express = require("express");
const router = express.Router();
const plateHeaderController = require("../controller/plateHeaderController");

router
  .route(`/`)
  .get(plateHeaderController.getAllPlateHeaders)
  .post(
    plateHeaderController.uploadImage,
    plateHeaderController.createPlateHeader
  )
  .patch(
    plateHeaderController.uploadImage,
    plateHeaderController.getPlateHeaderId,
    plateHeaderController.updateExitingPlateHeader
  );

router
  .route("/:id")
  .get(plateHeaderController.getPlateHeader)
  .patch(plateHeaderController.updatePlateHeader)
  .delete(plateHeaderController.deletePlateHeader);

module.exports = router;
