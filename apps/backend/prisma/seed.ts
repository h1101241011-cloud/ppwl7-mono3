import { createClient } from "@libsql/client";

const client = createClient({
  url: "libsql://monorepo-h1101241011-cloud.aws-eu-west-1.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzQ1ODYwNTUsImlkIjoiMDE5ZDJkOTEtY2YwMS03MDllLWFmMTktOTAxNmY4YjBlZmM3IiwicmlkIjoiYzI3MjNmNDAtODBlZi00YjdkLTlhZDUtOTAzYTgyNzY1ZTI4In0.2zC2aj6brdXW9sKYps8oGPxHIPP8fd1RVHfwUdLuSWEKzZlyctCBYd_OVYq7M8uTbxvsBiFc0Ht2thiwRHMJCQ",
});

async function main() {
  console.log("--- 🚀 Memulai Seeding Langsung ke Turso ---");

  const data = [
    { email: "leo@example.com", name: "Leo" },
    { email: "student@example.com", name: "Student" },
  ];

  try {
    for (const item of data) {
      // Menggunakan query INSERT OR REPLACE (ekivalen dengan upsert di SQLite/LibSQL)
      await client.execute({
        sql: 'INSERT OR REPLACE INTO "User" (email, name) VALUES (?, ?)',
        args: [item.email, item.name],
      });
      console.log(`✅ Berhasil menambahkan/update: ${item.email}`);
    }
    console.log("--- ✨ Seeding Selesai! ---");
  } catch (error) {
    console.error("--- ❌ Seeding Gagal ---");
    console.error(error);
  } finally {
    client.close();
  }
}

main();