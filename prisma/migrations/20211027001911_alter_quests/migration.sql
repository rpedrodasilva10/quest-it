/*
  Warnings:

  - You are about to drop the column `questId` on the `children` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_quests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "startedAt" DATETIME,
    "finishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "parentId" INTEGER NOT NULL,
    CONSTRAINT "quests_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parents" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_quests" ("createdAt", "description", "finishedAt", "id", "parentId", "stars", "startedAt", "title", "updatedAt") SELECT "createdAt", "description", "finishedAt", "id", "parentId", "stars", "startedAt", "title", "updatedAt" FROM "quests";
DROP TABLE "quests";
ALTER TABLE "new_quests" RENAME TO "quests";
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
    CONSTRAINT "children_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parents" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_children" ("age", "createdAt", "email", "id", "lastName", "name", "nickname", "parentId", "updatedAt") SELECT "age", "createdAt", "email", "id", "lastName", "name", "nickname", "parentId", "updatedAt" FROM "children";
DROP TABLE "children";
ALTER TABLE "new_children" RENAME TO "children";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
