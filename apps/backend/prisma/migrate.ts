process.env.DATABASE_URL = "libsql://monorepo-h1101241011-cloud.aws-eu-west-1.turso.io";
import { prisma } from "./db";
import { readFileSync } from "fs";
import { join } from "path";

const sql = readFileSync(join(__dirname, "../baseline.sql"), "utf-8");

const statements = sql
  .split(";")
  .map(s => s.trim())
  .filter(s => s.length > 0);

for (const statement of statements) {
  await prisma.$executeRawUnsafe(statement);
}

await prisma.$disconnect();