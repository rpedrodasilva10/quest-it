/*
  Warnings:

  - You are about to drop the column `birthDate` on the `children` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `children` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `children` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `parents` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `parents` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_children" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "parentId" INTEGER,
    "password" TEXT NOT NULL,
    CONSTRAINT "children_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parents" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_children" ("createdAt", "email", "id", "name", "parentId", "password", "updatedAt") SELECT "createdAt", "email", "id", "name", "parentId", "password", "updatedAt" FROM "children";
DROP TABLE "children";
ALTER TABLE "new_children" RENAME TO "children";
CREATE UNIQUE INDEX "children_email_key" ON "children"("email");
CREATE TABLE "new_parents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL
);
INSERT INTO "new_parents" ("birthDate", "createdAt", "email", "id", "name", "password", "updatedAt") SELECT "birthDate", "createdAt", "email", "id", "name", "password", "updatedAt" FROM "parents";
DROP TABLE "parents";
ALTER TABLE "new_parents" RENAME TO "parents";
CREATE UNIQUE INDEX "parents_email_key" ON "parents"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
