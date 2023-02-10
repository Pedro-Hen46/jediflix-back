import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function createUser(req, res) {
  const { name, email, password } = req.body;

  const _cryptPass = bcrypt.hashSync(password, 10);

  try {

    const userAlreadyExists = await prisma.users.findFirst({
      where :{
        email
      }
    });

    if(userAlreadyExists) return res.status(409).send("User already exists");

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
