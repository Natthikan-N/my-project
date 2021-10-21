const express = require("express");
const router = express.Router();
const cupPlateController = require("../controller/cupPlateController");

router
  .route("/")
  .get(cupPlateController.getAllCupPlates)
  .post(cupPlateController.createCupPlate);

router
  .route("/:id")
  .get(cupPlateController.getCupPlate)
  .patch(cupPlateController.updateCupPlate)
  .delete(cupPlateController.deleteCupPlate);

module.exports = router;
