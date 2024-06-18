const router = require("express").Router();
const QuanAoController = require("../controller/QuanAoController");

router.post("/",QuanAoController.addQuanAo);
router.get("/",QuanAoController.getAllQuanAo);
router.put("/:id",QuanAoController.updateQuanAo);
router.delete("/:id",QuanAoController.deleteQuanAo);

module.exports = router;
