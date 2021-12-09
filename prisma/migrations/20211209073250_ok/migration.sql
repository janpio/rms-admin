-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_menus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "menu_image" TEXT,
    "description" TEXT,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "is_available" BOOLEAN NOT NULL DEFAULT false,
    "view_count" INTEGER NOT NULL DEFAULT 0,
    "slug" TEXT,
    "creatorId" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "categoryId" INTEGER,
    CONSTRAINT "menus_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "menus_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_menus" ("categoryId", "created_at", "creatorId", "description", "id", "is_available", "menu_image", "name", "price", "rating", "slug", "updated_at", "view_count") SELECT "categoryId", "created_at", "creatorId", "description", "id", "is_available", "menu_image", "name", "price", "rating", "slug", "updated_at", "view_count" FROM "menus";
DROP TABLE "menus";
ALTER TABLE "new_menus" RENAME TO "menus";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
