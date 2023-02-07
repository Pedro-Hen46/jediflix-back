import { Router } from "express";
import { allFilmsList, getFilmById, insertFilm } from "../controllers/filmController.js";

const router = Router();

router.get('/films', allFilmsList);
router.get('/film/:id', getFilmById);
router.post("/film", insertFilm)

export default router;