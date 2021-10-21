const express = require("express");
const router = express.Router();
const separatorController = require("../controller/separatorController");

router
  .route("/")
  .get(separatorController.getAllSeparators)
  .post(separatorController.createSeparator);

router
  .route("/:id")
  .get(separatorController.getSeparator)
  .patch(separatorController.updateSeparator)
  .delete(separatorController.deleteSeparator);

module.exports = router;
