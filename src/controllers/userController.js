import { Prisma, PrismaClient } from "@prisma/client";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function createUser(req, res) {
  const { name, email, password } = req.body;

  const _cryptPass = bcrypt.hashSync(password, 10);

  try {
    const userAlreadyExists = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) return res.status(409).send("User already exists");

    await prisma.users.create({
      data: {
        name,
        email,
        password: _cryptPass,
      },
    });

    return res.status(201).send("User created successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}

export async function loginUser(req, res) {
  const SECRET = process.env.JWT_SECRET;
  const { email, password } = req.body;

  const user = await prisma.users.findFirst({
    where: {
      email,
    },
  });

  if (!user) return res.status(404).send("");

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect)
    return res.status(401).send("Invalid email or password");

  try {
    const token = Jwt.sign(
      {
        id: user.id,
      },
      SECRET
    );

    return res.status(200).json({
      msg:"user already signed",
      token: token
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}

export async function getUserData(req, res){

  const user = await prisma.users.findFirst({
    where: {
      email: req.body.email,
    },
  });

  if (!user) return res.status(404).send("");

  return res.status(200).json({
    email: user.email,
    name: user.name
  });
}

export async function updateUserData(req, res){
  try {
    const user = await prisma.users.findFirst({
      where: {
        email: req.body.email,
      },
    });
  
    if (!user) return res.status(404).send("");
  
    await prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        name: req.body.name,
        password: bcrypt.hashSync(req.body.newPassword, 10)
      },
    });
  
    return res.status(200).json({
      msg:"user updated successfully"
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}