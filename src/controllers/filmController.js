import { Prisma, PrismaClient } from "@prisma/client";
import { films } from "../dbStrategy/database.js";

const prisma = new PrismaClient();

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

export async function insertFilm(req, res) {
  const { film } = req.body;

  try {
    console.log(film);
    await prisma.films.create({
      data: film,
    });

    res.status(201).send("Film added successfully");
  } catch (err) {
    res.send(err.message);
  }
}
