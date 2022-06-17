/*
  Warnings:

  - You are about to drop the `section_items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "section_items" DROP CONSTRAINT "section_items_section_component_fkey";

-- DropTable
DROP TABLE "section_items";

-- CreateTable
CREATE TABLE "component_items" (
    "id" TEXT NOT NULL,
    "component_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "value" INTEGER,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "path" TEXT,

    CONSTRAINT "component_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "component_items" ADD CONSTRAINT "component_items_component_id_fkey" FOREIGN KEY ("component_id") REFERENCES "section_components"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
