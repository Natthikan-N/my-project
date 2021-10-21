const express = require("express");
const router = express.Router();
const jointController = require("../controller/jointController");

router
  .route(`/`)
  .get(jointController.getAllJoints)
  .post(jointController.createJoint);

router
  .route("/:id")
  .get(jointController.getJoint)
  .patch(jointController.updateJoint)
  .delete(jointController.deleteJoint);

module.exports = router;
