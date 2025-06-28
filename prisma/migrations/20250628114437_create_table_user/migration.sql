-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "company" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
