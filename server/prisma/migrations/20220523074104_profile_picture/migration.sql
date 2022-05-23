-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_profiles" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "display_name" TEXT NOT NULL,
    "welcome_phrase" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "profile_picture" TEXT
);
INSERT INTO "new_profiles" ("description", "display_name", "profile_picture", "username", "welcome_phrase") SELECT "description", "display_name", "profile_picture", "username", "welcome_phrase" FROM "profiles";
DROP TABLE "profiles";
ALTER TABLE "new_profiles" RENAME TO "profiles";
CREATE UNIQUE INDEX "profiles_username_key" ON "profiles"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
