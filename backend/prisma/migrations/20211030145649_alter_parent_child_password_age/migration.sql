/*
  Warnings:

  - Added the required column `age` to the `parents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `parents` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_parents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_parents" ("createdAt", "email", "id", "lastName", "name", "nickname", "updatedAt") SELECT "createdAt", "email", "id", "lastName", "name", "nickname", "updatedAt" FROM "parents";
DROP TABLE "parents";
ALTER TABLE "new_parents" RENAME TO "parents";
CREATE TABLE "new_children" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "lastName" TEXT NOT NULL,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "parentId" INTEGER,
    "password" TEXT NOT NULL DEFAULT 'NOT DEFINED',
    "firstAccess" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "children_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parents" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_children" ("age", "createdAt", "email", "id", "lastName", "name", "nickname", "parentId", "updatedAt") SELECT "age", "createdAt", "email", "id", "lastName", "name", "nickname", "parentId", "updatedAt" FROM "children";
DROP TABLE "children";
ALTER TABLE "new_children" RENAME TO "children";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
