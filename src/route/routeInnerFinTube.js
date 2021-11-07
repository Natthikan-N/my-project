const express = require("express");
const router = express.Router();
const innerFinTubeController = require("../controller/innerFinTubeController");

router
  .route(`/`)
  .get(innerFinTubeController.getAllInnerFinTubes)
  .post(
    innerFinTubeController.uploadImage,
    innerFinTubeController.createInnerFinTube
  )
  .patch(
    innerFinTubeController.uploadImage,
    innerFinTubeController.getInnerfinId,
    innerFinTubeController.updateExitingInnerFinTube
  );

router
  .route("/:id")
  .get(innerFinTubeController.getInnerFinTube)
  .patch(innerFinTubeController.updateInnerFinTube)
  .delete(innerFinTubeController.deleteInnerFinTube);

// router
//   .route(`/update`)
//   .patch(
//     innerFinTubeController.uploadImage,
//     innerFinTubeController.getInnerfinId,
//     innerFinTubeController.updateExitingInnerFinTube
//   );

module.exports = router;
