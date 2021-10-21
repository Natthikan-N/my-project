const express = require("express");
const router = express.Router();
const innerFinTubeController = require("../controller/innerFinTubeController");

router
  .route(`/`)
  .get(innerFinTubeController.getAllInnerFinTubes)
  .post(innerFinTubeController.createInnerFinTube);

router
  .route("/:id")
  .get(innerFinTubeController.getInnerFinTube)
  .patch(innerFinTubeController.updateInnerFinTube)
  .delete(innerFinTubeController.deleteInnerFinTube);

module.exports = router;
