const express = require("express");
const router = express.Router();
const tankHeaderController = require("../controller/tankHeaderController");

router
  .route(`/`)
  .get(tankHeaderController.getAllTankHeaders)
  .post(tankHeaderController.createTankHeader);

router
  .route("/:id")
  .get(tankHeaderController.getTankHeader)
  .patch(tankHeaderController.updateTankHeader)
  .delete(tankHeaderController.deleteTankHeader);

module.exports = router;
