import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

import filmRouter from "./routes/filmRoute.js"
import userRouter from "./routes/userRoute.js"

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());

server.use(filmRouter);
server.use(userRouter);


server.listen(process.env.PORT, () => {
    console.log(chalk.yellow.bgBlack.bold(`Server is running on port: ${process.env.PORT}`));
})