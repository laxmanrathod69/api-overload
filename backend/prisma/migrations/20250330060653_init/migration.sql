-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "apiUrl" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "headers" JSONB,
    "concurrency" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'In Progress',
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),
    "responseTime" DOUBLE PRECISION,
    "successRate" DOUBLE PRECISION,
    "failureRate" DOUBLE PRECISION,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
