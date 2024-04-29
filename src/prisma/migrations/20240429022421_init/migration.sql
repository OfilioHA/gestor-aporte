-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dependencyId" INTEGER NOT NULL,
    CONSTRAINT "User_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "Dependency" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dependency" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Personal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstnames" TEXT NOT NULL,
    "lastnames" INTEGER NOT NULL,
    "dependencyId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "Personal_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "Dependency" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Support" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "minimun" REAL NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Period" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dependencyId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "Period_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "Dependency" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Deposit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personalId" INTEGER NOT NULL,
    "supportId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "amount" REAL NOT NULL,
    "madeAt" DATETIME NOT NULL,
    CONSTRAINT "Deposit_supportId_fkey" FOREIGN KEY ("supportId") REFERENCES "Support" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deposit_personalId_fkey" FOREIGN KEY ("personalId") REFERENCES "Personal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deposit_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
