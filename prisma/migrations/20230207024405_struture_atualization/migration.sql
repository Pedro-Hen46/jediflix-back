/*
  Warnings:

  - You are about to drop the `Film` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `Days` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Seats` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Showtimes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Days" DROP CONSTRAINT "Days_filmId_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_filmId_fkey";

-- DropTable
DROP TABLE "Film";

-- CreateTable
CREATE TABLE "Films" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "priceTicket" INTEGER NOT NULL,
    "frontCover" TEXT NOT NULL,
    "headerImage" TEXT NOT NULL,
    "trailerUrl" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "productedAt" TIMESTAMP(3) NOT NULL,
    "duration" TEXT NOT NULL,
    "ageClassification" TEXT NOT NULL,

    CONSTRAINT "Films_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Films_id_key" ON "Films"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Days_id_key" ON "Days"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_id_key" ON "Orders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Seats_id_key" ON "Seats"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Showtimes_id_key" ON "Showtimes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- AddForeignKey
ALTER TABLE "Days" ADD CONSTRAINT "Days_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Films"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Films"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
