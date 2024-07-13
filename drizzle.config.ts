import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});