import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { mongoDBURL, port } from "./config.js";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
