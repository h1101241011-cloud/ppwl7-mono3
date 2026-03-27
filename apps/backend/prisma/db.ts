import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client"; 

const client = createClient({
  url: "libsql://monorepo-h1101241011-cloud.aws-eu-west-1.turso.io",
  authToken: "TOKEN_KAMU_YANG_PANJANG",
});

const adapter = new PrismaLibSql(client as any);

// Pakai cara standar Prisma 7
export const prisma = new PrismaClient({ adapter });