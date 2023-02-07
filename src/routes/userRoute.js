import { Router } from "express";
import { createUser } from "../controllers/userController.js"
import userValidate from "../middlewares/userValidate.js";

const router = Router();

//router.post('/login', loginUser);
router.post('/register', userValidate, createUser);

export default router;