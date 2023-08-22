-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,
    "priv_level" INTEGER,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "username" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "greeting" TEXT NOT NULL,
    "color" TEXT,
    "description" TEXT NOT NULL,
    "profile_picture" TEXT,
    "profile_cover" TEXT,
    "profile_animation" TEXT,
    "id" TEXT NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "sections" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "account_tokens" (
    "id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "expires_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_username_key" ON "accounts"("username");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_username_key" ON "profiles"("username");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_username_fkey" FOREIGN KEY ("username") REFERENCES "profiles"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_username_fkey" FOREIGN KEY ("username") REFERENCES "profiles"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_components" ADD CONSTRAINT "section_components_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "component_items" ADD CONSTRAINT "component_items_component_id_fkey" FOREIGN KEY ("component_id") REFERENCES "section_components"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_tokens" ADD CONSTRAINT "account_tokens_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
