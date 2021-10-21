const express = require("express");
const router = express.Router();
const outerFinController = require("../controller/outerFinController");

router
  .route(`/`)
  .get(outerFinController.getAllOuterFins)
  .post(outerFinController.createOuterFin);

router
  .route("/:id")
  .get(outerFinController.getOuterFin)
  .patch(outerFinController.updateOuterFin)
  .delete(outerFinController.deleteOuterFin);

module.exports = router;