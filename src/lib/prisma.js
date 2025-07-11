import { PrismaClient } from "@prisma/client";

let prisma;

const isDev = process.env.NODE_ENV !== "production";

const globalForPrisma = globalThis;

if (isDev) {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  prisma = globalForPrisma.prisma;
} else {
  prisma = new PrismaClient();
}

export { prisma };
