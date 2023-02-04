import { Router } from "express";
import { allFilmsList } from "../controllers/filmController.js";

const router = Router();

router.get('/films', allFilmsList);

export default router;