/*
  Warnings:

  - The primary key for the `Films` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Films` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `filmId` on the `Days` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `filmId` on the `Orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Days" DROP CONSTRAINT "Days_filmId_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_filmId_fkey";

-- DropIndex
DROP INDEX "Films_id_key";

-- AlterTable
ALTER TABLE "Days" DROP COLUMN "filmId",
ADD COLUMN     "filmId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Films" DROP CONSTRAINT "Films_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Films_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_pkey",
DROP COLUMN "filmId",
ADD COLUMN     "filmId" INTEGER NOT NULL,
ADD CONSTRAINT "Orders_pkey" PRIMARY KEY ("userId", "filmId");

-- AddForeignKey
ALTER TABLE "Days" ADD CONSTRAINT "Days_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Films"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Films"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
