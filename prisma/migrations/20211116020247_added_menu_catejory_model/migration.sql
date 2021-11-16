-- CreateTable
CREATE TABLE "Menu" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "Price" DECIMAL NOT NULL,
    "menu_image" TEXT,
    "description" TEXT,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "creatorId" INTEGER,
    CONSTRAINT "Menu_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CategoriesOnMenu" (
    "menuId" BIGINT NOT NULL,
    "categoryId" BIGINT NOT NULL,

    PRIMARY KEY ("menuId", "categoryId"),
    CONSTRAINT "CategoriesOnMenu_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CategoriesOnMenu_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
