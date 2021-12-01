/*
  Warnings:

  - You are about to drop the column `birthDate` on the `parents` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_parents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_parents" ("createdAt", "email", "id", "name", "password", "updatedAt") SELECT "createdAt", "email", "id", "name", "password", "updatedAt" FROM "parents";
DROP TABLE "parents";
ALTER TABLE "new_parents" RENAME TO "parents";
CREATE UNIQUE INDEX "parents_email_key" ON "parents"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
