/*
  Warnings:

  - You are about to drop the column `surname` on the `parents` table. All the data in the column will be lost.
  - Added the required column `lastname` to the `parents` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "children" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "lastName" TEXT NOT NULL,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "parentId" INTEGER,
    CONSTRAINT "children_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parents" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_parents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nickname" TEXT,
    "email" TEXT NOT NULL
);
INSERT INTO "new_parents" ("createdAt", "email", "id", "name", "nickname", "updatedAt") SELECT "createdAt", "email", "id", "name", "nickname", "updatedAt" FROM "parents";
DROP TABLE "parents";
ALTER TABLE "new_parents" RENAME TO "parents";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
