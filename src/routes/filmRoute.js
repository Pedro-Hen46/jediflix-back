import { Router } from "express";
import { allFilmsList, getFilmById } from "../controllers/filmController.js";

const router = Router();

router.get('/films', allFilmsList);
router.get('/film/:id', getFilmById);

export default router;