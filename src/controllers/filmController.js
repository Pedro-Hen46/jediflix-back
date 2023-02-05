import { films } from "../dbStrategy/database.js";

export function allFilmsList(req, res) {
  res.json(films);
}

export function getFilmById(req, res) {
  const { id } = req.params;
  try {
    const film = films.find((film) => film.id == id);
    res.json(film);
  } catch (err) {
    console.log(err.message);
  }
}
