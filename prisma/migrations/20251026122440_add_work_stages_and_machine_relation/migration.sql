/*
  Warnings:

  - The values [FACEBOOK] on the enum `AuthMethod` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AuthMethod_new" AS ENUM ('CREDENTIALS', 'GOOGLE', 'GITHUB');
ALTER TABLE "public"."users" ALTER COLUMN "authMethod" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "authMethod" TYPE "AuthMethod_new" USING ("authMethod"::text::"AuthMethod_new");
ALTER TYPE "AuthMethod" RENAME TO "AuthMethod_old";
ALTER TYPE "AuthMethod_new" RENAME TO "AuthMethod";
DROP TYPE "public"."AuthMethod_old";
ALTER TABLE "users" ALTER COLUMN "authMethod" SET DEFAULT 'CREDENTIALS';
COMMIT;

-- CreateTable
CREATE TABLE "tools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tool_id" TEXT NOT NULL,
    "picture" TEXT,
    "description" TEXT,
    "size" TEXT,
    "type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machine_cnc" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "machine_cnc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_overnight" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "rt" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "madeBy" TEXT,
    "leftToMake" INTEGER NOT NULL,
    "productionTime" TEXT,
    "machineId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "work_overnight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_stages" (
    "id" SERIAL NOT NULL,
    "stepNumber" INTEGER NOT NULL,
    "picture" TEXT,
    "description" TEXT,
    "workId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "work_stages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tools_tool_id_key" ON "tools"("tool_id");

-- CreateIndex
CREATE UNIQUE INDEX "work_overnight_rt_key" ON "work_overnight"("rt");

-- AddForeignKey
ALTER TABLE "work_overnight" ADD CONSTRAINT "work_overnight_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "machine_cnc"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_stages" ADD CONSTRAINT "work_stages_workId_fkey" FOREIGN KEY ("workId") REFERENCES "work_overnight"("id") ON DELETE CASCADE ON UPDATE CASCADE;
