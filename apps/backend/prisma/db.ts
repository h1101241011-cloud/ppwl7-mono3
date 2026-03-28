import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client"; 

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DB_AUTH_TOKEN,
});

const adapter = new PrismaLibSql(client as any);

export const prisma = new PrismaClient({ adapter });