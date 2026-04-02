import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Inisialisasi native connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Bungkus pool native dengan Prisma adapter
const adapter = new PrismaPg(pool);

// Masukkan adapter secara eksplisit ke dalam konstruktor PrismaClient
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
