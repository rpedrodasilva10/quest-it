/*
  Warnings:

  - Added the required column `email` to the `parents` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_parents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nickname" TEXT,
    "email" TEXT NOT NULL
);
INSERT INTO "new_parents" ("createdAt", "id", "name", "nickname", "surname", "updatedAt") SELECT "createdAt", "id", "name", "nickname", "surname", "updatedAt" FROM "parents";
DROP TABLE "parents";
ALTER TABLE "new_parents" RENAME TO "parents";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
