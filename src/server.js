import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

import filmRouter from "./routes/filmRoute.js"

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());

server.use(filmRouter)


server.listen(process.env.PORT, () => {
    console.log(chalk.green.bold(`Server is running on port: ${process.env.PORT}`));
})