/*
  Warnings:

  - The values [Acoustics] on the enum `GuitarType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "GuitarType_new" AS ENUM ('Electric', 'Acoustic', 'Ukulele');
ALTER TABLE "products" ALTER COLUMN "guitarType" DROP DEFAULT;
ALTER TABLE "products" ALTER COLUMN "guitarType" TYPE "GuitarType_new" USING ("guitarType"::text::"GuitarType_new");
ALTER TYPE "GuitarType" RENAME TO "GuitarType_old";
ALTER TYPE "GuitarType_new" RENAME TO "GuitarType";
DROP TYPE "GuitarType_old";
ALTER TABLE "products" ALTER COLUMN "guitarType" SET DEFAULT 'Electric';
COMMIT;
