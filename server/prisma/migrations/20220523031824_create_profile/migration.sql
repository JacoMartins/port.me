-- CreateTable
CREATE TABLE "profiles" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "display_name" TEXT NOT NULL,
    "welcome_phrase" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_username_key" ON "profiles"("username");
