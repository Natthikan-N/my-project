const express = require("express");
const router = express.Router();
const sidePlateController = require("../controller/sidePlateController");

router
  .route(`/`)
  .get(sidePlateController.getAllSidePlates)
  .post(sidePlateController.createSidePlate);

router
  .route("/:id")
  .get(sidePlateController.getSidePlate)
  .patch(sidePlateController.updateSidePlate)
  .delete(sidePlateController.deleteSidePlate);

module.exports = router;
