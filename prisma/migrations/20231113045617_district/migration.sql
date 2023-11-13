-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "district_id" INTEGER,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parent_id" INTEGER,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;
