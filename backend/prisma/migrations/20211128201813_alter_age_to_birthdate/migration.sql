/*
  Warnings:

  - You are about to drop the column `age` on the `children` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `parents` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `children` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `parents` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_children" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "parentId" INTEGER,
    "password" TEXT NOT NULL,
    CONSTRAINT "children_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parents" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_children" ("createdAt", "email", "id", "lastName", "name", "nickname", "parentId", "password", "updatedAt") SELECT "createdAt", "email", "id", "lastName", "name", "nickname", "parentId", "password", "updatedAt" FROM "children";
DROP TABLE "children";
ALTER TABLE "new_children" RENAME TO "children";
CREATE UNIQUE INDEX "children_email_key" ON "children"("email");
CREATE TABLE "new_parents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL
);
INSERT INTO "new_parents" ("createdAt", "email", "id", "lastName", "name", "nickname", "password", "updatedAt") SELECT "createdAt", "email", "id", "lastName", "name", "nickname", "password", "updatedAt" FROM "parents";
DROP TABLE "parents";
ALTER TABLE "new_parents" RENAME TO "parents";
CREATE UNIQUE INDEX "parents_email_key" ON "parents"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
