-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'WAITER'
);
