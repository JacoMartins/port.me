/*
  Warnings:

  - Made the column `first_name` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `greeting` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id` on table `profiles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "profiles" ALTER COLUMN "first_name" SET NOT NULL,
ALTER COLUMN "last_name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "greeting" SET NOT NULL,
ALTER COLUMN "id" SET NOT NULL;

-- CreateTable
CREATE TABLE "account_tokens" (
    "id" TEXT NOT NULL,
    "refresh_token" VARCHAR NOT NULL,
    "account_id" TEXT NOT NULL,
    "expires_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_tokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "account_tokens" ADD CONSTRAINT "account_tokens_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
