/*
  Warnings:

  - Added the required column `profile_picture` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_profiles" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "display_name" TEXT NOT NULL,
    "welcome_phrase" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "profile_picture" TEXT NOT NULL
);
INSERT INTO "new_profiles" ("description", "display_name", "username", "welcome_phrase") SELECT "description", "display_name", "username", "welcome_phrase" FROM "profiles";
DROP TABLE "profiles";
ALTER TABLE "new_profiles" RENAME TO "profiles";
CREATE UNIQUE INDEX "profiles_username_key" ON "profiles"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
