const express = require("express");
const router = express.Router();
const capController = require("../controller/capController");

router
  .route("/")
  .get(capController.getAllCaps)
  .post(capController.uploadImage, capController.createCap)
  .patch(
    capController.uploadImage,
    capController.getCapId,
    capController.updateExitingCap
  );

router
  .route("/:id")
  .get(capController.getCap)
  .patch(capController.updateCap)
  .delete(capController.deleteCap);

module.exports = router;
