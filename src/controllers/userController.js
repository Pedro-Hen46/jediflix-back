import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function createUser(req, res) {
  const { name, email, password } = req.body;

  const _cryptPass = bcrypt.hashSync(password, 10);

  try {
    await prisma.users.create({
      data: {
        name,
        email,
        password: _cryptPass,
      },
    });


    const seats = await prisma.seats.createMany({
      data: [
        {
          name: "1",
          isAvailable: true,
        },
        {
          name: "2",
          isAvailable: true,
        },
        {
          name: "3",
          isAvailable: true,
        },
        {
          name: "4",
          isAvailable: true,
        },
        {
          name: "5",
          isAvailable: true,
        },
        {
          name: "6",
          isAvailable: true,
        },
        {
          name: "7",
          isAvailable: true,
        },
        {
          name: "8",
          isAvailable: true,
        },
        {
          name: "9",
          isAvailable: true,
        },
        {
          name: "10",
          isAvailable: true,
        },
        {
          name: "11",
          isAvailable: true,
        },
        {
          name: "12",
          isAvailable: true,
        },
        {
          name: "13",
          isAvailable: true,
        },
        {
          name: "14",
          isAvailable: true,
        },
        {
          name: "15",
          isAvailable: true,
        },
        {
          name: "16",
          isAvailable: true,
        },
        {
          name: "17",
          isAvailable: true,
        },
        {
          name: "18",
          isAvailable: true,
        },
        {
          name: "19",
          isAvailable: true,
        },
        {
          name: "20",
          isAvailable: true,
        },
        {
          name: "21",
          isAvailable: true,
        },
        {
          name: "22",
          isAvailable: true,
        },
        {
          name: "23",
          isAvailable: true,
        },
        {
          name: "24",
          isAvailable: true,
        },
        {
          name: "25",
          isAvailable: true,
        },
        {
          name: "26",
          isAvailable: true,
        },
        {
          name: "27",
          isAvailable: true,
        },
        {
          name: "28",
          isAvailable: true,
        },
        {
          name: "29",
          isAvailable: true,
        },
        {
          name: "30",
          isAvailable: true,
        },
        {
          name: "31",
          isAvailable: true,
        },
        {
          name: "32",
          isAvailable: true,
        },
        {
          name: "33",
          isAvailable: true,
        },
        {
          name: "34",
          isAvailable: true,
        },
        {
          name: "35",
          isAvailable: true,
        },
        {
          name: "36",
          isAvailable: true,
        },
        {
          name: "37",
          isAvailable: true,
        },
        {
          name: "38",
          isAvailable: true,
        },
        {
          name: "39",
          isAvailable: true,
        },
        {
          name: "40",
          isAvailable: true,
        },
        {
          name: "41",
          isAvailable: true,
        },
        {
          name: "42",
          isAvailable: true,
        },
        {
          name: "43",
          isAvailable: true,
        },
        {
          name: "44",
          isAvailable: true,
        },
        {
          name: "45",
          isAvailable: true,
        },
        {
          name: "46",
          isAvailable: true,
        },
        {
          name: "47",
          isAvailable: true,
        },
        {
          name: "48",
          isAvailable: true,
        },
        {
          name: "49",
          isAvailable: true,
        },
        {
          name: "50",
          isAvailable: true,
        },
      ],
    });
    
    const seatsShowtimes = seats.map((seat) => {
        return {
          seatsId: seat.id,
          daysId: date.id
        }
    })
    const showtimes = await prisma.showtimes.createMany({
      data: {
        seatsShowtimes
      }
    })
    

   
    const date = await prisma.days.create({
      data: {
        date: new Date(),
        weekday: "Segunda Feira"
      }
    })

   
    

    return res.status(201).send("User created successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}
