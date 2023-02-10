import { registerUserSchema, userLoginSchema, userUpdateSchema } from "../schemas/userSchema.js";
import Jwt from "jsonwebtoken";

export async function checkRegisterUser(req, res, next) {
  const { error } = registerUserSchema.validate(req.body);

  if (error) return res.sendStatus(400);

  res.locals.table = "users";

  next();
}
export async function checkUserDataUpdate(req, res, next) {
  const { error } = userUpdateSchema.validate(req.body);

  if (error) return res.sendStatus(400);

  res.locals.table = "users";

  next();
}

export async function checkLoginUser(req, res, next) {
  const { error } = userLoginSchema.validate(req.body);

  if (error) return res.sendStatus(400);

  next();
}

export async function authenticatedUser(req, res, next) {
  //recebendo o token via headers e verificando;
  const { authorization } = req.headers;

  const token = authorization && authorization.split(" ")[1];
  if (!token) return res.status(401).send("");

  try {
    //caso o token esteja tudo filé:
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);

    res.locals.table = "users";

    next();
  } catch (error) {
    console.log(err);
    return res.status(500).send(err);
  }
}

