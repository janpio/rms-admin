/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `CategoriesOnMenu` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `categoryId` on the `CategoriesOnMenu` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `menuId` on the `CategoriesOnMenu` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `Menu` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Menu` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Category" ("id", "name") SELECT "id", "name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE TABLE "new_CategoriesOnMenu" (
    "menuId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    PRIMARY KEY ("menuId", "categoryId"),
    CONSTRAINT "CategoriesOnMenu_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CategoriesOnMenu_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CategoriesOnMenu" ("categoryId", "menuId") SELECT "categoryId", "menuId" FROM "CategoriesOnMenu";
DROP TABLE "CategoriesOnMenu";
ALTER TABLE "new_CategoriesOnMenu" RENAME TO "CategoriesOnMenu";
CREATE TABLE "new_Menu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "Price" DECIMAL NOT NULL,
    "menu_image" TEXT,
    "description" TEXT,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "creatorId" INTEGER,
    CONSTRAINT "Menu_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Menu" ("Price", "creatorId", "description", "id", "menu_image", "name", "rating") SELECT "Price", "creatorId", "description", "id", "menu_image", "name", "rating" FROM "Menu";
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
