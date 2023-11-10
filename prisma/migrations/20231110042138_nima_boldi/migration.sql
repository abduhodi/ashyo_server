-- DropForeignKey
ALTER TABLE "Category_brand" DROP CONSTRAINT "Category_brand_category_id_fkey";

-- AlterTable
ALTER TABLE "Category_brand" ALTER COLUMN "category_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Category_brand" ADD CONSTRAINT "Category_brand_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
