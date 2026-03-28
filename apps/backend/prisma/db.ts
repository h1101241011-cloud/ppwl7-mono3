import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client"; 

const client = createClient({
  url: "libsql://monorepo-h1101241011-cloud.aws-eu-west-1.turso.io",
  authToken: "eyJheyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzQ1ODYwNTUsImlkIjoiMDE5ZDJkOTEtY2YwMS03MDllLWFmMTktOTAxNmY4YjBlZmM3IiwicmlkIjoiYzI3MjNmNDAtODBlZi00YjdkLTlhZDUtOTAzYTgyNzY1ZTI4In0.2zC2aj6brdXW9sKYps8oGPxHIPP8fd1RVHfwUdLuSWEKzZlyctCBYd_OVYq7M8uTbxvsBiFc0Ht2thiwRHMJCQbGciOiJFZERTQSIsInR5cCI",
});

const adapter = new PrismaLibSql(client as any);

// Pakai cara standar Prisma 7
export const prisma = new PrismaClient({ adapter });