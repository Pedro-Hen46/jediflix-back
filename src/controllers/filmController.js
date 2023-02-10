import { Prisma, PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

const prisma = new PrismaClient();

export async function getAFilmList(req, res) {
  try {
    const allFilms = await prisma.films.findMany({});

    res.status(200).json(allFilms);
  } catch (err) {
    res.send(err.message);
  }
}

export async function getFilmById(req, res) {
  const { id } = req.params;

  try {
    const film = await prisma.films.findFirst({
      where: {
        id: Number(id),
      },
    });
    const days = await prisma.days.findFirst({
      where: {
        filmId: Number(id)
      }
    })

    const session = await prisma.showtimes.findFirst({
      where: {
        daysId: days.id
      }
    })

    const seats = await prisma.seats.findMany({
      where: {
        showtimesId: { in: session.id}
      }
    })

    const DETAILS = {
      film,
      days: {
        weekday: days.weekday,
        date: days.date,
      },
      sessions: {
        time: session.time
      },
      seats
    }

    res.status(200).json(DETAILS);
  } catch (err) {
    res.send(err.message);
  }
}

export async function insertFilm(req, res) {
  const { film } = req.body;
  console.log(new Date());
  try {
    //Adicionando um filme da tabela
    const filmAdd = await prisma.films.create({
      data: film,
    });

    //Adicionando os dias de exibição deste filme
    const days = await prisma.days.create({
      data: {
        date: dayjs().format(),
        weekday: dayjs().format("dddd"),
        filmId: filmAdd.id,
      },
    });

    const showtimes = await prisma.showtimes.create({
      data: {
        daysId: days.id,
        time: dayjs().format(),
      },
    });

    // Criando todos os assentos disponiveis naquele Horário
    const seats = await prisma.seats.createMany({
      data: [
        {
          showtimesId: showtimes.id,
          name: "1",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "2",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "3",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "4",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "5",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "6",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "7",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "8",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "9",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "10",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "11",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "12",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "13",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "14",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "15",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "16",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "17",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "18",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "19",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "20",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "21",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "22",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "23",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "24",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "25",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "26",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "27",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "28",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "29",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "30",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "31",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "32",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "33",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "34",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "35",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "36",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "37",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "38",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "39",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "40",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "41",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "42",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "43",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "44",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "45",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "46",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "47",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "48",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "49",
          isAvailable: true,
        },
        {
          showtimesId: showtimes.id,
          name: "50",
          isAvailable: true,
        },
      ],
    });
    
    res.status(201).send("Film added successfully");
  } catch (err) {
    res.send(err.message);
  }
}
