-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "userId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "AccessRecord" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "method" TEXT NOT NULL DEFAULT 'FACIAL',

    CONSTRAINT "AccessRecord_pkey" PRIMARY KEY ("id")
);
