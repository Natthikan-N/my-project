const express = require("express");
const router = express.Router();
const outerFinController = require("../controller/outerFinController");

router
  .route(`/`)
  .get(outerFinController.getAllOuterFins)
  .post(outerFinController.uploadImage, outerFinController.createOuterFin)
  .patch(
    outerFinController.uploadImage,
    outerFinController.getOuterFinId,
    outerFinController.updateExitingOuterFin
  );

router
  .route("/:id")
  .get(outerFinController.getOuterFin)
  .patch(outerFinController.updateOuterFin)
  .delete(outerFinController.deleteOuterFin);

// router
//   .route(`/update`)
//   .patch(
//     outerFinController.uploadImage,
//     outerFinController.getOuterFinId,
//     outerFinController.updateExitingOuterFin
//   );

module.exports = router;
