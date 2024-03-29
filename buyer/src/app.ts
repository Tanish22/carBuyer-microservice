import express, { Request, Response } from "express";
import { json } from "body-parser";
import cors from "cors";
import cookieSession from "cookie-session";

import { config } from "dotenv"; // config method reads the env var files & save them
config();

import { startDB } from "./db/db";
import { signUpRouter } from "./routes/signUp";
import { signInRouter } from "./routes/signIn";
import { signOutRouter } from "./routes/signOut";
import { currentUserRouter } from "./routes/current-user";
import { deleteBuyerRouter } from "./routes/clearDB";
import { allBuyers } from "./routes/allBuyers";
  
const app = express();
//app.set('trust proxy', true); // make express aware that it is behind a proxy of ingress-nginx

const PORT = process.env.PORT;

app.use(cors());
app.use(json());

// app.use(
//   cookieSession({
//     signed: false,
//     secure: true, // cookies will be used only via https connection 
//   })
// )

// route middlewares
app.use(signUpRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(currentUserRouter);
app.use(deleteBuyerRouter);
app.use(allBuyers);

app.get('/api/welcome', (req: Request, res: Response) => {
  res.send('Welcome to Car Buyer !!')
})

app.listen(PORT, async () => {
  try {
    await startDB();
    console.log('Connected to MongoDB !!');    

    console.log(`listening to port ${PORT}`);
    console.log("v1.0.0");
  } 
  catch (error) {
    console.log(error, "Error connecting to the database !!");
  }
});
