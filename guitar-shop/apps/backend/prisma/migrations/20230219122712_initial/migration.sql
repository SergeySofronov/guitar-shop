/*
  Warnings:

  - You are about to drop the column `price` on the `orders` table. All the data in the column will be lost.
  - Made the column `orderId` on table `order-items` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "order-items" ALTER COLUMN "orderId" SET NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "price";
