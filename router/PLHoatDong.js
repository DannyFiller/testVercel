const router = require("express").Router();
const PLHoatDongController = require("../controller/PLHoatDongController");

router.post("/",PLHoatDongController.addPLHoatDong);
router.get("/",PLHoatDongController.getAllPLHoatDong);
router.put("/:id",PLHoatDongController.updatePLHoatDong);
router.delete("/:id",PLHoatDongController.deletePLHoatDong);

module.exports = router;
