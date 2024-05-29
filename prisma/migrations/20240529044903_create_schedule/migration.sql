-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);
