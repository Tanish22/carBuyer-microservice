import express from "express";
import { json } from "body-parser";

import { config } from "dotenv"; // config method reads the env var files & save them
config();

import { startDB } from "./db/db";
import { signUpRouter } from "./routes/signUp";
import { signInRouter } from "./routes/signIn";
import { signOutRouter } from "./routes/signOut";
import { currentUserRouter } from "./routes/current-user";
import { deleteBuyerRouter } from "./routes/clearDB";

const app = express();

const PORT = process.env.PORT;

app.use(json());

// route middlewares
app.use(signUpRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(currentUserRouter);
app.use(deleteBuyerRouter);

app.listen(PORT, async () => {
  try {
    await startDB();
    console.log('Connected to MongoDB !!');    

    console.log(`listening to port ${PORT}`);
    console.log("v1.0.0");
  } 
  catch (e) {
    console.log(e, "Error connecting to the database !!");
  }
});
