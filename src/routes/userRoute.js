import { Router } from "express";
import { createUser, loginUser, getUserData, updateUserData } from "../controllers/userController.js";
import {
  checkRegisterUser,
  checkLoginUser,
  authenticatedUser,
  checkUserDataUpdate
} from "../middlewares/userValidate.js";

const router = Router();

router.post("/login", checkLoginUser, loginUser);
router.post("/register", checkRegisterUser, createUser);

router.get("/user/:id", authenticatedUser, getUserData); // Rota privada
router.post("/user-update", checkUserDataUpdate, authenticatedUser, updateUserData); // Rota privada

export default router;
