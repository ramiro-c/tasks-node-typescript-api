import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const uri =
      `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DATABASE}?retryWrites=true&w=majority`;

    const db = await mongoose.connect(uri);
    console.log("db", db.connection);
  }
  catch (error) {
    console.error(error);
  }
})();