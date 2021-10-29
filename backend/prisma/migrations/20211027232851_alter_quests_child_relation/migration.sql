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
    "childId" INTEGER,
    CONSTRAINT "quests_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parents" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "quests_childId_fkey" FOREIGN KEY ("childId") REFERENCES "children" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_quests" ("createdAt", "description", "finishedAt", "id", "parentId", "stars", "startedAt", "title", "updatedAt") SELECT "createdAt", "description", "finishedAt", "id", "parentId", "stars", "startedAt", "title", "updatedAt" FROM "quests";
DROP TABLE "quests";
ALTER TABLE "new_quests" RENAME TO "quests";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
