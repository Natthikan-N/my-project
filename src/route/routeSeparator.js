const express = require("express");
const router = express.Router();
const separatorController = require("../controller/separatorController");

router
  .route("/")
  .get(separatorController.getAllSeparators)
  .post(separatorController.uploadImage, separatorController.createSeparator)
  .patch(
    separatorController.uploadImage,
    separatorController.getSeparatorId,
    separatorController.updateExitingSeparator
  );

router
  .route("/:id")
  .get(separatorController.getSeparator)
  .patch(separatorController.updateSeparator)
  .delete(separatorController.deleteSeparator);

module.exports = router;
