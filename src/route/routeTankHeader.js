const express = require("express");
const router = express.Router();
const tankHeaderController = require("../controller/tankHeaderController");

router
  .route(`/`)
  .get(tankHeaderController.getAllTankHeaders)
  .post(tankHeaderController.uploadImage, tankHeaderController.createTankHeader)
  .patch(
    tankHeaderController.uploadImage,
    tankHeaderController.getTankHeaderId,
    tankHeaderController.updateExitingTankHeader
  );

router
  .route("/:id")
  .get(tankHeaderController.getTankHeader)
  .patch(tankHeaderController.updateTankHeader)
  .delete(tankHeaderController.deleteTankHeader);

module.exports = router;
