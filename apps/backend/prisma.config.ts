import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: "libsql://monorepo-h1101241011-cloud.aws-eu-west-1.turso.io",
  },
});