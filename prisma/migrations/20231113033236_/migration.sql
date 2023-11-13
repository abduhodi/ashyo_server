-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,
    "percent" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale_model" (
    "id" SERIAL NOT NULL,
    "model_id" INTEGER,
    "sale_id" INTEGER,

    CONSTRAINT "Sale_model_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sale_model" ADD CONSTRAINT "Sale_model_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "Sale"("id") ON DELETE SET NULL ON UPDATE CASCADE;
