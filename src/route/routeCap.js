const express = require("express");
const router = express.Router();
const capController = require("../controller/capController");

router.route("/").get(capController.getAllCaps).post(capController.createCap);

router
  .route("/:id")
  .get(capController.getCap)
  .patch(capController.updateCap)
  .delete(capController.deleteCap);

module.exports = router;
