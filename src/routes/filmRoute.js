import { Router } from "express";
import { getAFilmList, getFilmById, insertFilm, getFilmsByCategory } from "../controllers/filmController.js";

const router = Router();

router.get('/films', getAFilmList);
router.get('/film/:id', getFilmById);
router.get('/films/category', getFilmsByCategory);


router.post("/film", insertFilm)

export default router;