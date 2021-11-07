const express = require("express");
const router = express.Router();
const sidePlateController = require("../controller/sidePlateController");

router
  .route(`/`)
  .get(sidePlateController.getAllSidePlates)
  .post(sidePlateController.uploadImage, sidePlateController.createSidePlate)
  .patch(
    sidePlateController.uploadImage,
    sidePlateController.getSidePlateId,
    sidePlateController.updateExitingSidePlate
  );

router
  .route("/:id")
  .get(sidePlateController.getSidePlate)
  .patch(sidePlateController.updateSidePlate)
  .delete(sidePlateController.deleteSidePlate);

module.exports = router;
