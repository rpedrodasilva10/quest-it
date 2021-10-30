/*
  Warnings:

  - You are about to drop the column `firstAccess` on the `children` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "password" TEXT NOT NULL,
    CONSTRAINT "children_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parents" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_children" ("age", "createdAt", "email", "id", "lastName", "name", "nickname", "parentId", "password", "updatedAt") SELECT "age", "createdAt", "email", "id", "lastName", "name", "nickname", "parentId", "password", "updatedAt" FROM "children";
DROP TABLE "children";
ALTER TABLE "new_children" RENAME TO "children";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
