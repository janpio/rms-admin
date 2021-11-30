-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "menuId" INTEGER,
    CONSTRAINT "Categories_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Categories" ("id", "menuId", "name") SELECT "id", "menuId", "name" FROM "Categories";
DROP TABLE "Categories";
ALTER TABLE "new_Categories" RENAME TO "Categories";
CREATE UNIQUE INDEX "Categories_menuId_key" ON "Categories"("menuId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
