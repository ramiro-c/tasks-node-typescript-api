import dotenv from "dotenv";

dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "",
  MONGO_USER: encodeURIComponent(process.env.MONGO_USER || ""),
  MONGO_PASSWORD: encodeURIComponent(process.env.MONGO_PASSWORD || ""),
  MONGO_HOST: process.env.MONGO_HOST || "",
  PORT: parseInt(process.env.PORT as string, 10),
  BASE_URL: "/api/v1"
}