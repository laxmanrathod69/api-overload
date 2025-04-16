/*
  Warnings:

  - The primary key for the `Test` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[jobId]` on the table `Test` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jobId` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Test` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Test" DROP CONSTRAINT "Test_pkey",
ADD COLUMN     "jobId" UUID NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Test_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Test_jobId_key" ON "Test"("jobId");
