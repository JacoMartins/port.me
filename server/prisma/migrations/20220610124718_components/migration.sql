-- CreateTable
CREATE TABLE "section_components" (
    "id" TEXT NOT NULL,
    "section_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "value" INTEGER,
    "description" TEXT NOT NULL,

    CONSTRAINT "section_components_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "section_items" (
    "id" TEXT NOT NULL,
    "section_component" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "value" INTEGER,
    "description" TEXT NOT NULL,

    CONSTRAINT "section_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "section_components" ADD CONSTRAINT "section_components_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_items" ADD CONSTRAINT "section_items_section_component_fkey" FOREIGN KEY ("section_component") REFERENCES "section_components"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
