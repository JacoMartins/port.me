-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "profiles" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "display_name" TEXT NOT NULL,
    "welcome_phrase" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "profile_picture" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_username_key" ON "profiles"("username");
