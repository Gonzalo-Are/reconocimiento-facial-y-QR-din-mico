// import { PrismaClient } from "@prisma/client";

// let prisma;

// // Verifica si estamos en desarrollo
// const isDev = process.env.NODE_ENV !== "production";

// // Usamos globalThis para entornos modernos como App Router
// const globalForPrisma = globalThis;

// if (isDev) {
//   if (!globalForPrisma.prisma) {
//     globalForPrisma.prisma = new PrismaClient();
//   }
//   prisma = globalForPrisma.prisma;
// } else {
//   prisma = new PrismaClient();
// }

// export { prisma };
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
