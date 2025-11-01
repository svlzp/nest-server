/*
  Warnings:

  - You are about to drop the column `picture` on the `machine_cnc` table. All the data in the column will be lost.
  - You are about to drop the column `picture` on the `tools` table. All the data in the column will be lost.
  - You are about to drop the column `picture` on the `work_stages` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('IMAGE', 'VIDEO');

-- AlterTable
ALTER TABLE "machine_cnc" DROP COLUMN "picture";

-- AlterTable
ALTER TABLE "tools" DROP COLUMN "picture";

-- AlterTable
ALTER TABLE "work_stages" DROP COLUMN "picture";

-- CreateTable
CREATE TABLE "files" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "type" "FileType" NOT NULL,
    "toolId" INTEGER,
    "machineId" INTEGER,
    "workId" INTEGER,
    "stageId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "tools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "machine_cnc"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_workId_fkey" FOREIGN KEY ("workId") REFERENCES "work_overnight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "work_stages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
