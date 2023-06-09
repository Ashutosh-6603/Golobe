import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster-golobe.fp3l8xp.mongodb.net/`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Error in mongodb connection : " + error);
});

database.once("open", () => {
  console.log("Connected successfully");
});
