import { createClient } from "@libsql/client";
import fs from "fs";
import path from "path";

// Konfigurasi langsung ke Turso
const client = createClient({
  url: "libsql://monorepo-h1101241011-cloud.aws-eu-west-1.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzQ1ODYwNTUsImlkIjoiMDE5ZDJkOTEtY2YwMS03MDllLWFmMTktOTAxNmY4YjBlZmM3IiwicmlkIjoiYzI3MjNmNDAtODBlZi00YjdkLTlhZDUtOTAzYTgyNzY1ZTI4In0.2zC2aj6brdXW9sKYps8oGPxHIPP8fd1RVHfwUdLuSWEKzZlyctCBYd_OVYq7M8uTbxvsBiFc0Ht2thiwRHMJCQ",
});

async function run() {
  try {
    console.log("--- 🚀 Memulai Migrasi Langsung ke Turso (LibSQL) ---");
    
    // Membaca file SQL baseline kamu
    const sqlPath = path.join(__dirname, "baseline.sql");
    const sqlContent = fs.readFileSync(sqlPath, "utf-8");

    console.log("--- 📄 Mengeksekusi SQL Skema ---");
    
    // executeMultiple akan menjalankan semua perintah CREATE TABLE di baseline.sql
    await client.executeMultiple(sqlContent);

    console.log("--- ✅ MIGRASI BERHASIL! Tabel telah dibuat di Turso ---");
  } catch (error) {
    console.error("--- ❌ MIGRASI GAGAL ---");
    console.error(error);
  } finally {
    client.close();
  }
}

run();