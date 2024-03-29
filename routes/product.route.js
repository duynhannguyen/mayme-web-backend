import express from "express";
import menuController from "../controller/productController.js";
import authMdw from "../middlewares/auth.mdw.js";
import uploadMdw from "../middlewares/upload.mdw.js";

const router = express.Router();

router.post(
  "/menu",
  authMdw,
  uploadMdw.single("image"),
  menuController.createDish
);

router.get("/menu/:id", menuController.getDish);
router.delete("/menu/:id", authMdw, menuController.deleteDish);
router.put(
  "/menu/:id",
  authMdw,
  uploadMdw.single("hinhAnh"),
  menuController.updateDish
);
router.get("/listmenu/:id", menuController.getUserById);
export default router;
