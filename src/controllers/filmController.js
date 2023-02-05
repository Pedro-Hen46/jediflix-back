import { films } from "../dbStrategy/database.js";

export async function allFilmsList(req, res){
    res.json(films)
}