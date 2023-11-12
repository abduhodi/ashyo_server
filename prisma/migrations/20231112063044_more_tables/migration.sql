/*
  Warnings:

  - You are about to drop the `Category_Brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product_Model` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category_Brand" DROP CONSTRAINT "Category_Brand_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "Category_Brand" DROP CONSTRAINT "Category_Brand_category_id_fkey";

-- DropTable
DROP TABLE "Category_Brand";

-- DropTable
DROP TABLE "Product_Model";

-- CreateTable
CREATE TABLE "Product_model" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category_brand" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER,
    "brand_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_brand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product_model" ADD CONSTRAINT "Product_model_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Category_brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_brand" ADD CONSTRAINT "Category_brand_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_brand" ADD CONSTRAINT "Category_brand_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
